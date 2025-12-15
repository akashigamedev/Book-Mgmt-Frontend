import { useEffect } from "react";
import getAllRequests from "../services/getAllRequests";
import useRequestsPageStore from "../hooks/useRequestsPageStore";
import { MdCheck, MdClose } from "react-icons/md";
import resolveRequest from "../services/resolveRequest";

const RequestsPage = () => {
  const requests = useRequestsPageStore((s) => s.requests);

  useEffect(() => {
    getAllRequests();
  }, []);

  return (
    <div className="w-full h-full">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h2>Pending Book Requests</h2>
        <p className="text-(--text-secondary) max-w-[65ch]">
          Review all book requests submitted by users and take action by
          approving or rejecting them based on availability and policy.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-5">
        {requests && requests.length > 0
          ? requests.map((bookReq) => {
              return (
                <div>
                  <h4>{bookReq.book.title}</h4>
                  <p>{bookReq.book.author}</p>
                  {bookReq.requests.length > 0 ? (
                    <div className="mt-2 grid grid-cols-3 gap-4">
                      {bookReq.requests.map((req) => (
                        <div className="p-4 rounded-lg bg-(--surface-bg-primary) border border-(--border-secondary) max-h-[300px]">
                          <div className="flex justify-between items-center gap-2">
                            <div>
                              <h5>{req.user.name}</h5>
                              <p className="text-(--text-secondary)">
                                {req.user.email}
                              </p>
                            </div>
                            {/* Card Cta */}
                            <div className="flex items-center gap-3">
                              <button className="size-7 flex justify-center items-center bg-(--sb-green-haze-bg-active)/30 hover:bg-(--sb-green-haze-bg-hover)/50 active:bg-(--sb-green-haze-bg-on-press)/50 border border-(--sb-green-haze-bg-active) rounded-md text-white cursor-pointer">
                                <MdCheck
                                  size={16}
                                  onClick={() =>
                                    resolveRequest(
                                      req.user.id,
                                      bookReq.bookId,
                                      "approved"
                                    )
                                  }
                                />
                              </button>
                              <button className="size-7 flex justify-center items-center bg-(--sb-valencia-bg-active)/30 hover:bg-(--sb-valencia-bg-hover)/50 active:bg-(--sb-valencia-bg-on-press)/50 border border-(--sb-valencia-bg-active) rounded-md text-white cursor-pointer">
                                <MdClose
                                  size={16}
                                  onClick={() =>
                                    resolveRequest(
                                      req.user.id,
                                      bookReq.bookId,
                                      "rejected"
                                    )
                                  }
                                />
                              </button>
                            </div>
                          </div>

                          <div className="flex items-center gap-1 mt-4">
                            <p>Return Date:</p>
                            <p>
                              {req.durationUntil
                                ? new Intl.DateTimeFormat(undefined, {
                                    dateStyle: "medium",
                                  }).format(new Date(req.durationUntil))
                                : "N/A"}
                            </p>
                          </div>
                          {req.note ? (
                            <div className="flex items-center gap-1 text-(--text-secondary)">
                              <p>Note: </p>
                              <p>{req.note}</p>
                            </div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default RequestsPage;
