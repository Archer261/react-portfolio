import React from 'react';

// Array of objects that represent the programming languages and frameworks that I specialize in
const icons = [{ name: "React.js", url: "https://img.icons8.com/ios-glyphs/240/000000/react.png" },
{ name: "JavaScript", url: "https://img.icons8.com/color/240/000000/javascript--v1.png" },
{ name: "MySql", url: "https://img.icons8.com/color/240/000000/my-sql.png" },
{ name: "Mongo", url: "https://img.icons8.com/color/240/000000/mongodb.png" },
{ name: "Mobile App", url: "https://img.icons8.com/ios/100/000000/iphone14-pro.png" },
{ name: "Web Design", url: "https://img.icons8.com/color/240/000000/html-5--v1.png" },
{ name: "Node.js", url: "https://img.icons8.com/fluency/240/000000/node-js.png" },
{ name: "JQuery", url: "https://img.icons8.com/ios-filled/250/000000/jquery.png" },
{ name: "Express.js", url: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" }
]

const Skills = () => {
    return (
        <>
            <div class="container flex justify-center ...">
                <h2 className='justify-self-center text-2xl font-extrabold mt-2' style={{ color: "#ffde59" }}>Skills</h2>
            </div>

            <div className="divider"></div>

            <div class="container flex w-auto h-auto justify-items-center">
                <div className='container flex flex-wrap max-w-full h-auto'>
                    {icons.map((ele) => (
                        <div className='container flex flex-col w-auto h-auto '>

                            <div class="container flex justify-center ...">
                                <h3 className='justify-self-center font-bold text-lg'>{ele.name}</h3>
                            </div>
                            <img className="container flex grow bg-white rounded-full w-20 h-auto p-2 m-5 drop-shadow-2xl" src={ele.url} />
                        </div>
                    )
                    )}
                </div>
            </div>
        </>

    )
};

export default Skills 