import React, { useEffect, useRef, useState } from "react";
import SearchBar from "../Components/SearchBar";
import SearchResult from "../Components/SearchResult";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Search = () => {
  const limit = 10;
  const [query, setQuery] = useState("h");
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();
  const navigate = useNavigate();
  const requestUrl = "http://localhost:3000/api/addContact"; //post method
  useEffect(() => {
    // Function to load users based on the query and page
    const loadUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/username?query=${query}&limit=${limit}&page=${page}`
        );
        const data = res.data;

        if (data.code === 201 && data.data.data) {
          setUsers((prev) => [...prev, ...data.data.data]); // Spread the array to prevent nested arrays
          setHasMore(data.data.data.length > 0); // Set hasMore based on response length
        } else {
          console.log("ERROR: Unexpected response code or structure");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    loadUser();
  }, [page, query]);

  // Reset `users` and `page` when `query` changes
  useEffect(() => {
    setPage(1);
    setUsers([]);
  }, [query]);

  // Handle intersection observer to load more users
  const lastUserRef = (node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) setPage((prev) => prev + 1);
    });
    if (node) observer.current.observe(node); // Corrected to "observe" instead of "observer"
  };

  const querySearch = (que) => {
    setQuery(que);
  };
  const onMessageClick = (id) => {
    try {
      //extract AWT token

      const cooki = document.cookie;
      const token = cooki.slice(5);
      console.log(token);
      const decode = jwtDecode(token);

      addInContactList(decode.data.userId, id);
    } catch (err) {
      alert(err.message);
    }
  };

  const addInContactList = async (user_id, sender_id) => {
    //make to request to add in contact
    try {
      console.log(user_id + "---" + sender_id);
      const res = await axios.post(requestUrl, {
        userId: user_id,
        senderId: sender_id,
      });

      if (res.data) {
        //navigate on chat screen
        const userWIthId2 = users.find((user) => user._id === sender_id);
        navigate(`/chat/${sender_id}`, { state: { userWIthId2 } });

        console.log(res.data);
      } else {
        console.log(res.data);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="w-[90vw] mr-[20px] custom-scrollbar relative overflow-auto h-[95vh] mt-[2.5vh] mb-[2.5vh] ml-[2.5vh] flex-col">
      <div className="p-[10px] max-w-[400px]">
        <SearchBar onQueryChange={querySearch} />
      </div>
      <div className="custom-scrollbar max-w-[400px] p-[10px] overflow-x-auto h-[88vh] scroll-smooth">
        {/* {users.map((user, index) => (
          <SearchResult
            ref={index === users.length + 1 ? lastUserRef : null} // Set ref on last item for infinite scroll
            key={user._id || index} // Use user._id if available, or fallback to index
            id={user._id}
            username={user.username}
            email={user.email}
            profile={user.profilePhoto}
            updatedAt={user.updatedAt}
            onClick={onMessageClick}
          />
        ))} */}
        <SearchResult/>
        <SearchResult/>
        <SearchResult/>
        <SearchResult/>
        <SearchResult/>
        <SearchResult/>
        <SearchResult/>
        <SearchResult/>
        <SearchResult/>
        <SearchResult/>
        <SearchResult/>
        <SearchResult/>
        <SearchResult/>
        <SearchResult/>
        <SearchResult/>
        <SearchResult/>
        <SearchResult/>
        <SearchResult/>
        <SearchResult/>
        <SearchResult/>
        <SearchResult/>
      </div>
    </div>
  );
};

export default Search;
