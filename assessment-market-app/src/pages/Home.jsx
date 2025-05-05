// // src/pages/Home.js
// import React, { useEffect, useState, useMemo } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchProducts } from "../features/products/productsSlice";
// import { setSearch } from "../features/filters/filtersSlice";
// import ProductCard from "../components/ProductCard";
// import Pagination from "../components/Pagination";
// import debounce from "lodash.debounce";

// const PRODUCTS_PER_PAGE = 6;

// const Home = () => {
//   const dispatch = useDispatch();
//   const { items, loading } = useSelector((state) => state.products);
//   const { search } = useSelector((state) => state.filters);

//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   const handleSearch = debounce((e) => {
//     dispatch(setSearch(e.target.value));
//     setCurrentPage(1);
//   }, 300);

//   const filtered = useMemo(() => {
//     return items.filter((item) =>
//       item.title.toLowerCase().includes(search.toLowerCase())
//     );
//   }, [items, search]);

//   const paginated = useMemo(() => {
//     const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
//     return filtered.slice(start, start + PRODUCTS_PER_PAGE);
//   }, [filtered, currentPage]);

//   return (
//     <div>
//       <input type="text" placeholder="Search..." onChange={handleSearch} />
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <>
//           <div className="grid">
//             {paginated.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//           <Pagination
//             total={filtered.length}
//             perPage={PRODUCTS_PER_PAGE}
//             current={currentPage}
//             onChange={setCurrentPage}
//           />
//         </>
//       )}
//     </div>
//   );
// };

// export default Home;

// src/pages/Home.js
import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import debounce from "lodash.debounce";

import { fetchProducts } from "../features/products/productsSlice";
import { setSearch } from "../features/filters/filtersSlice";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";

const PRODUCTS_PER_PAGE = 6;

const Home = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);
  const { search, category } = useSelector((state) => state.filters);

  const [currentPage, setCurrentPage] = useState(1);

  // Fetch products once on mount
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Debounced search dispatch
  const handleSearch = useMemo(
    () =>
      debounce((e) => {
        dispatch(setSearch(e.target.value));
        setCurrentPage(1);
      }, 300),
    [dispatch]
  );

  // Filter by search term AND selected category
  const filtered = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch = item.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesCategory = !category || item.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [items, search, category]);

  // Paginate filtered results
  const paginated = useMemo(() => {
    const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
    return filtered.slice(start, start + PRODUCTS_PER_PAGE);
  }, [filtered, currentPage]);

  if (loading) {
    return <p className="loading">Loading products…</p>;
  }

  return (
    <div className="home-page">
      <div className="home-page__controls">
        <input
          type="text"
          placeholder="Search products…"
          defaultValue={search}
          onChange={handleSearch}
          className="home-page__search"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="no-results">No products found.</p>
      ) : (
        <>
          <div className="grid">
            {paginated.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <Pagination
            total={filtered.length}
            perPage={PRODUCTS_PER_PAGE}
            current={currentPage}
            onChange={(page) => setCurrentPage(page)}
          />
        </>
      )}
    </div>
  );
};

export default Home;
