import React from "react";
import { useState, useRef, useEffect } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import Spinner from "./Spinner";
import apirequest from "./apirequest";
import './content.css'

export default function Content() {
  const Api_url = "http://localhost:3500/items";
  const [fetcherror, setFetcherror] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetch_data = async () => {
      try {
        const response = await fetch(Api_url);
        if (!response.ok) throw Error("Did not Recived Expected Data");
        const listitems = await response.json();
        await setItems(listitems);
        
        setLoading(false);
        console.log(listitems);
        // to remove fetch error if already set
        setFetcherror(null);
      } catch (err) {
        setLoading(false)
        setFetcherror(err.message);
        console.log(err.message);
      }
    };
    setTimeout(fetch_data,2000);
    // settime out me hume call nhi bas function ka nam dalna h agar call kar denge to wo run ho jayega
    // setTimeout(()=>{
    //     fetch_data();
    // },2000);
    // (async()=>fetch_data())();
    // fetch_data();
  }, []);

  const setandsave = (newitems) => {
    setItems(newitems);
  };

  const handleckeckbox = async(id) => {
    let newitems = items.map((item) =>
      item.id == id ? { ...item, checked: !item.checked } : item
    );
    const myitemarray=newitems.filter((item)=>item.id===id);
    setandsave(newitems);
    const Updateoption={
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ checked: myitemarray[0].checked })
    }
    const result= await apirequest(`${Api_url}/${id}`,Updateoption)
    if(result) setFetcherror(result);
    console.log(Updateoption);

  };
  const handledelete = async(id) => {
    let newitems = items.filter((item) => item.id !== id);
    setandsave(newitems);
    const deleteOptions = { method: 'DELETE' };
    const result= await apirequest(`${Api_url}/${id}`,deleteOptions)
    if(result) setFetcherror(result);
    console.log(deleteOptions);

  };

  const [newitem, setNewitem] = useState("");
  const addinputref = useRef();
  const handlesubmit = async(e) => {
    e.preventDefault();
    if (!newitem) {
      return;
    }
    const id = items.length ? items[items.length - 1].id + 1 : 1;

    let myItem = { id, checked: false, item: newitem };
    let newitems = [...items, myItem];
    // console.log(newitems)
    setandsave(newitems);
    setNewitem("");
    const postOption={
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(myItem)

    }
    const result= await apirequest(Api_url,postOption)
    if(result) setFetcherror(result);
  };

  const [searchText, setSearchText] = useState("");

  return (
    <main className="content">
      <div><form className="addform" onSubmit={handlesubmit}>
        <label htmlFor="addinp ">Add items</label>
        <input
          autoFocus
          name="addinp"
          type="text"
          ref={addinputref}
          placeholder="Add items"
          value={newitem}
          onChange={(e) => setNewitem(e.target.value)}
        />
        <button
          type="submit"
          aria-label="Add item"
          onClick={() => addinputref.current.focus()}
        >
          <FaPlus />
        </button>
      </form>

      <input
        id="search-items"
        role="searchbox"
        value={searchText}
        type="text"
        placeholder="Search Items"
        onChange={(e) => setSearchText(e.target.value)}
      /></div>
      {fetcherror && (
        <p className="error-banner">
          `{fetcherror}, Please ReLoad or Try After Some Time``
        </p>
      )}
      {
        !Loading?
        <>{!fetcherror && (
            <>
              {
                <>
                  {items.filter((item) =>
                    item.item.toLowerCase().includes(searchText.toLowerCase())
                  ).length ? (
                    <>
                      <p>
                        No. of items:{" "}
                        {
                          items.filter((item) =>
                            item.item
                              .toLowerCase()
                              .includes(searchText.toLowerCase())
                          ).length
                        }{" "}
                      </p>
                      <ul>
                        {items
                          .filter((item) =>
                            item.item
                              .toLowerCase()
                              .includes(searchText.toLowerCase())
                          )
                          .map((item) => (
                            <li>
                              <input
                                type="checkbox"
                                checked={item.checked}
                                onChange={() => handleckeckbox(item.id)}
                              />
                              <p>{item.item}</p>
                              <MdDeleteOutline
                                role="button"
                                tabIndex="0"
                                onClick={() => handledelete(item.id)}
                              />
                            </li>
                          ))}
                      </ul>
                    </>
                  ) : (
                    <p>The List Is Empty</p>
                  )}
                </>
              }
            </>
          )}</>
          :<Spinner/>
        
      }
    </main>
  );
}
