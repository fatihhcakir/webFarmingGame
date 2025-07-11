'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./Signup.module.css"

export default function SignUpPage(){

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const router = useRouter();

    function handleSignUp(){
        if(!username || !password){
            alert("Kullanıcı adı veya parola gerekli")
            return
        }

        let existUsers = JSON.parse(localStorage.getItem("users") || "{}");
        console.log("a",existUsers)
        existUsers[username] = password;
        console.log("b",existUsers)
        const temp = JSON.stringify(existUsers);
        console.log("c", temp)
            
        localStorage.setItem("users", JSON.stringify(existUsers));

        setPassword("");
        setUsername("");
        alert("Kayıt Başarılı, Giriş Yapabilirsiniz")
        router.push("/login")
        return
    }

    return(
        <div className={styles.mainContainer}>
            <h1>Kayıt Ekranı</h1>
            <label>Kullanıcı adı:  </label>
            <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <br/>
            <label>Şifre:  </label>
            <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button className={styles.btn} onClick={handleSignUp}>Kayıt Ol</button>
        </div>

    )

    
}