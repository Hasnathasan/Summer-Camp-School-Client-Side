import { Card, CardHeader, CardBody, Typography, CardFooter, Tooltip} from "@material-tailwind/react";
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
const ShowInstructor = ({instructor}) => {
    const {name, email, image} = instructor;
    return (
        <Card className="w-full">
      <CardHeader floated={false} className="h-70">
        <img className="w-full h-full" src={image} alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {name}{" "}
        </Typography>
        <Typography color="blue" className="font-medium" textGradient>
          Email: {email}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pb-9 pt-2">
      <Tooltip
      content={name}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}
    >
        <span><FaFacebook className="w-5 h-5 text-[#2f96ed]" /></span>
    </Tooltip>
      <Tooltip
      content={"@twitter_example"}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}
    >
        <span><FaTwitter className="w-5 h-5 text-[#19aaef]" /></span>
    </Tooltip>
      <Tooltip
      content={"@insta_example"}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}
    >
        <span><FaInstagram className="w-5 h-5 text-[#f62528]" /></span>
    </Tooltip>
      </CardFooter>
      <div>
      
      </div>
    </Card>
    );
};

export default ShowInstructor;