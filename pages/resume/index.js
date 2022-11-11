import { useEffect } from "react";
export default function Resume() {
    // redirect user to /resume.pdf
    useEffect(() => {
        window.location.replace("/resume.pdf");
    }, []);
}