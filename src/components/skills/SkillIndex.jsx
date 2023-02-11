import { useEffect, useState } from "react";

import axios from 'axios';
import React from 'react'

export const SkillIndex = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const getSkills = async () => {
            const apiSkills = await axios.get("http://localhost:8000/api/v1/skills");
            setSkills(apiSkills.data.data);
        };
        getSkills();
    }, []);

    return (
        <div className='mt-12'>
            <div className="relative overflow-x-auto">
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
                            return(
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

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
