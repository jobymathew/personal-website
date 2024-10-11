import Image from "next/image";
import Curtin from '../pictures/Curtin.jpeg';
import MEC from '../pictures/MEC.jpeg';



const Education: React.FC = () => {


    return (
        <div className="ml-10 mt-40">
            <h1 className="text-3xl md:text-5xl">Education</h1>

            <div className="flex justify-between">

                <div className="mt-10 flex items-center">
                    <Image
                        src={Curtin}
                        alt="Curtin University"
                        className="rounded-full shadow-lg w-44 h-44 object-contain"
                    />
                    <div className="ml-10">
                        <h2 className="text-2xl md:text-3xl mb-5">Curtin University of Technology</h2>
                        <h3>Master of Science (Computer Science)</h3>
                        <h4>August 2020 - March 2023</h4>
                    </div>
                </div>

                <div className="mt-10 flex items-center mr-10">
                    <Image
                        src={MEC}
                        alt="Model Engineering College"
                        className="rounded-full shadow-lg w-44 h-44 object-contain"
                    />
                    <div className="ml-10">
                        <h2 className="text-2xl md:text-3xl mb-5">Government Model Engineering College</h2>
                        <h3>Bachelor of Technology Computer Science & Engineering</h3>
                        <h4>August 2015 - June 2019</h4>
                    </div>
                </div>

            </div>
        </div>
    );

};

export default Education;