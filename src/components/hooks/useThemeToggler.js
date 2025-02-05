import { useEffect, useState } from 'react'

function useThemeToggler() {

    const preferLightQuery = '(prefers-color-scheme: "light")';
    const [mode, setMode] = useState("");

    useEffect(() => {

        const mediaQuery = window.matchMedia(preferLightQuery);
        const userPreference = window.localStorage.getItem("theme");

        const handleChange = () => {
                if(userPreference) {
                    let check = userPreference === "dark" ? "dark" : "light";
                    setMode(check);
                    if(check === "dark"){
                        document.documentElement.classList.add("dark");
                    } else{
                        document.documentElement.classList.remove("dark");
                    }
                } else {
                    let check = mediaQuery.matches ? "light" : "dark";
                    setMode(check);
                    if(check === "light"){
                        document.documentElement.classList.add("light");
                    } else{
                        document.documentElement.classList.remove("light");
                    }
                }
        }

        mediaQuery.addEventListener("change", handleChange()); 

        return () => mediaQuery.removeEventListener("change", handleChange())

    },[ ])

    useEffect(() => {
        if(mode === "dark"){
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        } 
        if(mode === "light") {
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
        
    }, [mode])

  return [mode, setMode];
}

export default useThemeToggler
