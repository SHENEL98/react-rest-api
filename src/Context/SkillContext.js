import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:8000/api/v1/";

const SkillContext = createContext();

//this will usefull to keep empty input text field.
const initialForm = {
    name: "",
    slug: "",
};

export const SkillProvider = ({ children }) => {
    //const variables from SkillCreate.js 
    // const [formValues, setFormValues] = useState({
    //     name: "",
    //     slug: "",
    // });

    const [formValues, setFormValues] = useState(initialForm);

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
        // console.log(id);
        const response = await axios.get("skills/" + id);
        const apiSkill = response.data.data;
        setSkill(apiSkill);
        setFormValues({
            name: apiSkill.name,
            slug: apiSkill.slug,
        });
    };

    //store
    const storeSkill = async (e) => {
        e.preventDefault();
        try {
            await axios.post("skills", formValues);
            // getSkills();
            setFormValues(initialForm);
            navigate("/skills");
        } catch (e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors);
            }
        }
    };

    //update
    const updateSkill = async (e) => {
        e.preventDefault();
        try {
            await axios.put("skills/" + skill.id, formValues);
            // getSkills();
            setFormValues(initialForm);

            navigate("/skills");

        } catch (e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors);
            }
        }
    };

    //delete
    const deleteSkill = async (id) => {
        if (!window.confirm("Do you want to delete this ?")) {
          return;
        }
        await axios.delete("skills/" + id);
        getSkills();
      };

    return <SkillContext.Provider
        value={{
            skill, skills, getSkill, getSkills, onChnage, formValues, storeSkill, errors,
            setErrors, updateSkill, deleteSkill
        }}>{children}</SkillContext.Provider>
}

export default SkillContext;

