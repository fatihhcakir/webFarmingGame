'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./Login.module.css"

export default function SignUpPage(){

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const router = useRouter();

    

    function handleLogin(){
        if(!username || !password){
            alert("Kullanıcı adı veya parola gerekli")
            return
        }
        
        const storedUsers = JSON.parse(localStorage.getItem("users") || "[]")
        
        if(storedUsers[username] && storedUsers[username]===password){
            alert("Giriş Başarılı")
            router.push("/game")
            return
        }
        else{
            alert("Kullanıcı adı veya şifre hatalı")
        }
        setPassword("");
        setUsername("");
        return
    }

    return(
        <div className={styles.mainContainer}>
            <h1>Giriş Ekranı</h1>
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
            <button className={styles.btn} onClick={handleLogin}>Giriş Yap</button>
        </div>

    )

    
}