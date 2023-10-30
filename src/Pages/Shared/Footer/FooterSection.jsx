import { FaSchool } from "react-icons/fa";
import { Footer } from "flowbite-react";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
const FooterSection = () => {
    return (
        <Footer className="bg-blue-gray-50 dark:bg-gray-800">
        <div className="w-full h-full p-10 rounded-none bg-blue-gray-50 dark:bg-gray-800 py-0 md:py-16">
          <div className="grid w-full justify-between sm:flex gap-9 sm:justify-between md:flex md:grid-cols-1">
            <div className="flex items-center gap-4">
              <FaSchool className="w-16 h-16 md:w-20 md:h-20"></FaSchool>
              <h2 className="text-xl md:text-3xl font-bold">Camp Adventureland</h2>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Turbo-Drive</Footer.Link>
                  <Footer.Link href="#">Tailwind CSS</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Contact us" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="https://github.com/Hasnathasan">Github</Footer.Link>
                  <Footer.Link href="https://www.facebook.com/profile.php?id=100076435238895">Facebook</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Address" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">New York, London (main office)</Footer.Link>
                  <Footer.Link href="#">Dhaka, Bangladesh</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Turbo-Drive™. All Rights Reserved." year={2023} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="https://www.facebook.com/profile.php?id=100076435238895" icon={FaFacebook} />
              <Footer.Icon href="#" icon={FaInstagram} />
              <Footer.Icon href="#" icon={FaTwitter} />
              <Footer.Icon href="#" icon={FaGithub} />
              <Footer.Icon href="#" icon={FaGoogle} />
            </div>
          </div>
        </div>
      </Footer>
    );
};

export default FooterSection;