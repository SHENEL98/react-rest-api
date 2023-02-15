import { useEffect, useContext} from "react";
import { Link } from "react-router-dom"; 
import React from 'react';
import SkillContext from "../../Context/SkillContext";

export const SkillIndex = () => {
    const { skills, getSkills} = useContext(SkillContext);
    //passed const variables to SkillContext.js
    useEffect(() => {
    //passed const variables to SkillContext.js
       
        getSkills();
    }, []);

    return (
        <div className='mt-12'>
            <div className="flex justify-end m-2 p-2">
                <Link
                    to="/skills/create"
                    className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded-md"
                >
                    New Skill
                </Link>
            </div>
            <div className="relative overflow-x-auto" bis_skin_checked="1">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Slug
                            </th>
                            <th scope="col" className="px-6 py-3">
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {skills.map((skill) => {
                            return (
                                <tr key={skill.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-6 py-4">{skill.name}</td>
                                    <td className="px-6 py-4">{skill.slug}</td>
                                    <td className="px-6 py-4">Edit / Delete</td>
                                </tr>
                            );
                        })}

                    </tbody>
                </table>
            </div>


            <hr />

        </div>
    )
}
