import React from 'react';
import  {useState} from 'react';

export const SkillCreate = () => {
    const[formValues, setFormValues] = useState({
        name: "",
        slug: "",
    })

    const onChnage = (e) => {
        const { name,value} =e.target;
        setFormValues({ ...formValues, [name]: value});
    }

    return (
        <div className="mt-12">
            <form>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" name="name" value={formValues["name"]} onChange={onChnage} id="name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                    {/* {errors.name && (
                            <span className="text-sm text-red-400">{errors.name[0]}</span>
                        )} */}
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" name="slug" value={formValues["slug"]} onChange={onChnage} id="slug" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="slug" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Slug</label>
                    {/* {errors.name && (
                            <span className="text-sm text-red-400">{errors.slug[0]}</span>
                        )} */}
                </div>

                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
 
        </div>
    )
}
