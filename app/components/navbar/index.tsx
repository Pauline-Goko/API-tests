'use client';
import { SetStateAction, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [query, setQuery] = useState("");

  const onSearch = (e: { target: { value: SetStateAction<string>; }; }) => {
    setQuery(e.target.value);
 
  };

  const headingStyle = {
    color: "purple",
    fontSize: "24px",
    textDecoration: "none", 
  };

  const searchInputStyle = {
    width: "400px",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
    color: "black", 
    cursor: "pointer",
  };

  const ulStyle = {
    listStyleType: "none", 
    padding: "0",
    display: "flex",
    gap: "3rem",
    fontSize: "20px"
  };
  const navBarStyle={
    display:"flex",
    gap:"350px",
    padding:"1%"

  }

  return (
    <div>
      <div style={navBarStyle}>
        <h4 style={headingStyle}>
          <Link href="/">
              M<span style={{ color: "red" }}>oo</span>vie
          </Link>
        </h4>
        <label htmlFor="search">
          <input
            type="search"
            name="search-form"
            id="search-form"
            style={searchInputStyle}
            placeholder="Search for movies..."
            value={query}
            onChange={onSearch}
          />
        </label>
        <ul style={ulStyle}>
          <li>Home</li>
          <ul>My list</ul>
        </ul>
        <button style={{ backgroundColor: "orange", color: "black" ,padding:"10px",borderRadius:"10px", float: "right"}}>
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
