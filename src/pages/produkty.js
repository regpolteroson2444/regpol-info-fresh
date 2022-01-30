import React from "react";
import Layout from "../components/Layouts";
import Helmet from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
import styles from "styled-components";
import { useState } from "react";
import Posts from "../components/posts";
import Pagination from "../components/pagination";
import Categories from "../components/Categories";

const StyledPanel = styles.aside`
text-align: center;
width: 80%;
margin: 0 auto;
@media only screen and (min-width: 430px) {
  width: 60%;
}
@media only screen and (min-width: 620px) {
  width: 40%;
}
@media only screen and (min-width:720px) {
  width: 40%;
 
}
  @media only screen and (min-width: 1100px) {
    position: sticky;
    top: 0;
    width: 30%;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    form {
      width: 20%;
    }
    .searchForm {
      order:1;
      margin-top: 20px;
    }
    .selectCategory {
      order:2;
    }
   
  }

form {
  
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin: 10px auto;
}

form input {
  width: 100%;
  padding: 8px;
  font-size: 17px;
}

form button {
  margin-top: 3px;
  margin-bottom: 20px;
  background-color: #E92828;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 17px;
  letter-spacing: 1px;
  cursor: pointer;
}

form button:hover {
  background-color: #d64040;
}
.CategoryBoxMobile {
  display: none;
}
.CategoryBoxDesktop {
  display:block;
}

.CategoryBoxDesktop, .CategoryBoxMobile {
  cursor: pointer;
}

.selectCategory {
  width: 100%;
  margin: 0 auto;
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  button {
    outline: none;
  }
  @media only screen and (min-width: 1100px) {
    .selectCategory {
      width: 100%;
    }
    .CategoryBoxMobile{
      display: block;
    }
    
  }
 
  .selectCategoryBtn {
    width: 100%;
    padding: 5px;
    font-size: 17px;
    background-color: #153243;
    color: white;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
    border: none;
  }
  .selectCategoryBtn:hover {
    background-color:#1a3c50;
  }

  ul {
    list-style: none;
    width: 100%;
  }
  li {
    width: 100%;
    cursor: pointer;
  }

  .CategoryOption {
    width:100%;
    padding: 5px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #153243;
    background: transparent;
    font-size: 17px;
    border: none;
    border: 1px solid #153243
    cursor: pointer;
    
  }
  .CategoryOptionActive {
    background: #153243;
    color: white;
  }

@media only screen and (min-width: 1100px) {
  .CategoryOption {
    border:none;
    border-bottom: 1px solid #153243;
    border-right: 1px solid #153243;
    font-size: 18px;
    padding: 7px;
    cursor: pointer;
  }
  .selectCategoryBtn {
    padding: 9px;
    pointer-events: none;
    font-size: 22px;
  }
}

}
`;

const StyledPageContainer = styles.main`
width: 90vw;
margin: 0 auto;
@media only screen and (min-width: 1100px) {
  display: flex;
  width: 85vw;
}
@media only screen and (min-width: 1500px) {
  width: 87vw;
  margin: 20px auto 20px 35px;
}
@media only screen and (min-width: 1630px) {
  width: 90vw;
  margin-left: 45px;
}
`;
const StyledCurrentPageNumber = styles.p`
text-align: center;
font-weight: bold;
font-size: 17px;
text-decoration: underline;`;

const Products = () => {
  const data = useStaticQuery(getProducts);

  const [catMenuMobile, setCatMenuMobile] = useState(false);
  const [posts, setPosts] = useState(data.allContentfulProduct.nodes);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(14);
  const [searchValue, setSearchValue] = useState("");
  const [chosenCategory, setChosenCategory] = useState("");

  const allCategories = [
    "Wszystkie Produkty",
    ...new Set(posts.map((item) => item.category)),
  ];

  const [categories] = useState(allCategories);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    window.scroll(0, 0);
    return setCurrentPage(pageNumber);
  };

  const filterItems = (category) => {
    setChosenCategory(category);
    if (category === "Wszystkie Produkty") {
      setPosts(data.allContentfulProduct.nodes);
      setCurrentPage(1);
      setCatMenuMobile(!catMenuMobile);
      return;
    } else {
      setPosts(
        data.allContentfulProduct.nodes.filter(
          (item) => item.category === category
        )
      );
    }
    setCatMenuMobile(!catMenuMobile);
  };

  const handleSearchInput = (e) => {
    console.log(posts);
    setSearchValue(e.target.value);
    if (e.target.value === "") {
      setPosts(data.allContentfulProduct.nodes);
    }

    setPosts(
      data.allContentfulProduct.nodes.filter((item) => {
        const desc = item.info.info.replace(/\s/g, "").toLowerCase();

        if (desc.includes(e.target.value.toLowerCase().replace(/\s/g, ""))) {
          return item;
        }
      })
    );
  };

  return (
    <Layout>
      <Helmet>
        <meta
          name="description"
          content="Kleje przemysłowe, uszczelniacze, silikony"
        />
        <meta
          name="keywords"
          content="Regpol Henkel Loctite Teroson Bonderite"
        />
        <link rel="canonical" href="https://www.regpol.info/"></link>
      </Helmet>
      <StyledPageContainer>
        <StyledPanel>
          <div className="selectCategory">
            <button
              onClick={() => setCatMenuMobile(!catMenuMobile)}
              className="selectCategoryBtn"
            >
              Wybierz Kategorie ▼
            </button>

            <ul
              className={
                catMenuMobile ? "CategoryBoxDesktop" : "CategoryBoxMobile"
              }
            >
              <Categories
                chosenCategory={chosenCategory}
                categories={categories}
                filterItems={filterItems}
              />
            </ul>
          </div>
          <form className="searchForm">
            <input
              value={searchValue}
              onChange={handleSearchInput}
              type="search"
              name="searchProduct"
              placeholder="Szukam produktu..."
            />
          </form>
        </StyledPanel>

        <Posts posts={currentPosts}></Posts>
      </StyledPageContainer>
      <StyledCurrentPageNumber> Strona: {currentPage}</StyledCurrentPageNumber>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      ></Pagination>
    </Layout>
  );
};

export default Products;

const getProducts = graphql`
  query products {
    allContentfulProduct {
      nodes {
        capacity
        category
        id
        title
        tds
        recording
        info {
          info
        }
        image {
          gatsbyImageData
        }
      }
    }
  }
`;
