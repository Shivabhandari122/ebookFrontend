import { useEffect, useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";

function Home() {
    const [books, setBooks] = useState([]);
    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3000/books');
        setBooks(response.data.data);
    };
    useEffect(() => {
        fetchBooks();
    }, []);
    console.log(books);
    return (
        <>
            <Navbar />
            <div className="flex flex-wrap justify-center space-x-4 space-y-4">
                {
                books.map((kitab) => (
                    <Card key={kitab.id} book={kitab} />
                ))
                }
            </div>
            <Footer />
        </>
    );
}
export default Home;
