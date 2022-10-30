import React from 'react';

const icons = [{ name: "React.js", url: "https://img.icons8.com/ios-glyphs/240/000000/react.png" },
{ name: "JavaScript", url: "https://img.icons8.com/color/240/000000/javascript--v1.png" },
{ name: "MySql", url: "https://img.icons8.com/color/240/000000/my-sql.png" },
{ name: "Mongo", url: "https://img.icons8.com/color/240/000000/mongodb.png" },
{ name: "Web Design", url: "https://img.icons8.com/color/240/000000/html-5--v1.png" },
{ name: "Node.js", url: "https://img.icons8.com/fluency/240/000000/node-js.png" },
{ name: "JQuery", url: "https://img.icons8.com/ios-filled/250/000000/jquery.png" }
]

const Skills = () => {
    return (
        <>
            <div class="grid justify-items-stretch ...">
                <h2 className='justify-self-center text-base-100'>Skills</h2>
            </div>
            <div class="grid grid-cols-3 gap-1 w-auto h-auto justify-items-center">
                {/* <div className='justify-center flex flex-row flex-wrap w-auto h-auto'> */}
                {icons.map((ele) => (
                    <div className='container flex flex-col '>
                        <div class="grid justify-items-stretch ...">

                            <h3 className='justify-self-center'>{ele.name}</h3>
                        </div>
                        <img className="flex grow bg-white rounded-full w-32 h-auto m2 p-2 m-5 drop-shadow-2xl" src={ele.url} />
                    </div>
                )
                )}
                {/* </div> */}
            </div>
        </>

    )
};

export default Skills 