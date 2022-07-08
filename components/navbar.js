import Link from "next/link"
export default function Navbar() {
    return(
    <nav>
        <div className="wrapper">
            <div className="logo"><a href=''>Kursus Kita</a></div>
            <div className="menu">
                <ul>
                    <li>
                        <Link href="http://localhost:3000/">
                            <a >Home </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="course">
                            <a >Courses</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="tutor">
                            <a >Tutors</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="campus">
                            <a >Partners</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}