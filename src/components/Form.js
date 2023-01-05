import React, {useState} from "react";
function Form (){
    const [form,setForm]=useState({name:"",surname:"",gender:"0"});
    const handleChange = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    return (
        <div>
            Form Uygulaması
            <div>
                <strong>İsim</strong>   <input  value={form.name} placeholder="İsim" name="name" onChange={handleChange}/>
                <strong>Soyisim</strong>   <input  value={form.surname} placeholder="Soyisim" name="surname" onChange={handleChange}/>
                <strong>Cinsiyet</strong>
                <select value={form.gender} onChange={handleChange} name="gender">
                    <option value="0" name="Kadın">Kadın</option>
                    <option value="1" name="Erkek">Erkek</option>
                </select>
                    <hr/>
                <div>
                    <h3>
                        Kullanıcı Bilgileri
                        <br/>
                        <strong>İsim: </strong>{form.name} <br/>
                        <strong>Soyisim: </strong>{form.surname} <br/>
                        <strong>Cinsiyet: </strong> {form.gender === "0" ? "Kadın":"Erkek"}
                    </h3>
                </div>


            </div>
        </div>
    )
};
export default Form;