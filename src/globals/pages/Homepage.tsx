// import { useEffect } from "react";

// // Icons
// import { MdDelete, MdEdit } from "react-icons/md";
// import { PiBookOpen } from "react-icons/pi";

// // Hooks
// import useCreateBookModal from "../../features/admin/hooks/useCreateBookModalStore";
// import useUpdateBookModalStore from "../hooks/useUpdateBookModalStore";
// import useDeleteBookModalStore from "../../features/admin/hooks/useDeleteBookModalStore";
// import useHomePageStore from "../hooks/useHomepageStore";

// // Services
// import fetchBooks from "../services/fetchBooks.service";

// // Components
// import UpdateBookModal from "../components/UpdateBookModal";
// import SearchBar from "../components/SearchBar";
// import CreateBookModal from "../../features/admin/components/CreateBookModal";
// import DeleteBookModal from "../../features/admin/components/DeleteBookModal";

// /**
//  * Homepage to display and manage books.
//  */
// const Homepage = () => {
//   const openCreateModal = useCreateBookModal((s) => s.openModal);
//   const openUpdateModal = useUpdateBookModalStore((s) => s.openModal);
//   const openDeleteModal = useDeleteBookModalStore((s) => s.openModal);
//   const books = useHomePageStore((s) => s.books);

//   // load books on page load
//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   return (
//     <div className="w-full flex justify-center">
//       <div className="w-full max-w-[1200px] min-h-screen p-5 pt-20">
//         <div className="w-full flex flex-col items-center gap-1">
//           <h1 className="text-center">Book Management Panel</h1>
//           <h5 className="text-center text-(--text-secondary)">
//             This panel allows admin to view, create and manage vast amount of
//             books with ease.
//           </h5>
//         </div>

//         <div className="mt-14 flex items-center gap-2">
//           <SearchBar />
//           <button
//             onClick={openCreateModal}
//             className="flex text-nowrap items-center gap-2 text-xl! bg-(--sb-ocean-bg-active) hover:bg-(--sb-ocean-bg-hover) active:bg-(--sb-ocean-bg-on-press) px-4 py-3 rounded-md transition-colors duration-100 ease-in"
//           >
//             <PiBookOpen />
//             <p>New Book</p>
//           </button>
//         </div>

//         <div className="mt-7">
//           <table className="w-full border-collapse bg-(--surface-bg) rounded-xl overflow-hidden shadow">
//             <thead className="bg-(--surface-bg-secondary)">
//               <tr>
//                 <th className="py-3 px-4 text-left text-sm font-semibold">
//                   ID
//                 </th>
//                 <th className="py-3 px-4 text-left text-sm font-semibold">
//                   Name
//                 </th>
//                 <th className="py-3 px-4 text-left text-sm font-semibold line-clamp-2">
//                   Author
//                 </th>
//                 <th className="py-3 px-4 text-left text-sm font-semibold">
//                   Publication
//                 </th>
//                 <th className="py-3 px-4 text-left text-sm font-semibold">
//                   Added On
//                 </th>
//                 <th className="py-3 px-4 text-left text-sm font-semibold">
//                   Modified On
//                 </th>
//                 <th className="py-3 px-4 text-center text-sm font-semibold">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {books && books.length > 0
//                 ? books.map((book) => (
//                     <tr
//                       key={book.ID}
//                       className="border-b border-(--border-secondary) hover:bg-(--surface-bg-secondary) cursor-pointer"
//                     >
//                       <td className="py-3 px-4">{book.ID}</td>
//                       <td className="py-3 px-4">{book.name}</td>
//                       <td className="py-3 px-4 max-w-[250px]">{book.author}</td>
//                       <td className="py-3 px-4">{book.publication}</td>
//                       <td className="py-3 px-4">
//                         {new Intl.DateTimeFormat("en-IN", {
//                           dateStyle: "medium",
//                         }).format(new Date(book.CreatedAt))}
//                       </td>
//                       <td className="py-3 px-4">
//                         {new Intl.DateTimeFormat("en-IN", {
//                           dateStyle: "medium",
//                         }).format(new Date(book.UpdatedAt))}
//                       </td>
//                       <td className="flex justify-center items-center py-3 px-4">
//                         <div
//                           onClick={() => openUpdateModal(book)}
//                           className="size-8 aspect-square p-1 flex justify-center items-center rounded-full hover:bg-(--surface-bg-tertiary) transition-colors ease-in duration-100"
//                         >
//                           <MdEdit size={16} />
//                         </div>
//                         <div
//                           onClick={() => openDeleteModal(book.ID)}
//                           className="size-8 aspect-square p-1 flex justify-center items-center rounded-full hover:bg-(--sb-valencia-bg-active) transition-colors ease-in duration-100"
//                         >
//                           <MdDelete size={16} />
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 : null}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <CreateBookModal />
//       <UpdateBookModal />
//       <DeleteBookModal />
//     </div>
//   );
// };

// export default Homepage;
