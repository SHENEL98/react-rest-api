import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:8000/api/v1/";

const SkillContext = createContext();

export const SkillProvider = ({ children }) => {
    //const variables from SkillCreate.js 
    const [formValues, setFormValues] = useState({
        name: "",
        slug: "",
    });

    const onChnage = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    //const variables from SkillIndex
    const [skills, setSkills] = useState([]);

    const [skill, setSkill] = useState([]);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();


    const getSkills = async () => {
        // const apiSkills = await axios.get("http://localhost:8000/api/v1/skills");
        const apiSkills = await axios.get("skills");
        setSkills(apiSkills.data.data);
    };

    const getSkill = async (id) => {
        const response = await axios.get("skills/" + id);
        setSkill(response.data.data);
    };

    const storeSkill = async (e) => {
        e.preventDefault();
        try {
          await axios.post("skills", formValues);
        //   setFormValues(initialForm);
          navigate("/skills");
        } catch (e) {
          if (e.response.status === 422) {
            setErrors(e.response.data.errors);
          }
        }
      };



    return <SkillContext.Provider 
    value={{ skill, skills, getSkill, getSkills, onChnage, formValues, storeSkill, errors,
        setErrors, }}>{children}</SkillContext.Provider>
}

export default SkillContext;

