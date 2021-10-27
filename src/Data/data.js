import IconSecurity from '../images/icon-security.svg';
import IconAnyFile from '../images/icon-any-file.svg';
import IconAccessAnyWhere from '../images/icon-access-anywhere.svg';
import IconCollaboration from '../images/icon-collaboration.svg';

import IllustrationStayProductive from '../images/illustration-stay-productive.png';
import IconArrow from '../images/icon-arrow.svg';


import Profile1 from '../images/profile-1.jpg';
import Profile2 from '../images/profile-2.jpg';
import Profile3 from '../images/profile-3.jpg';

export const services =[{
    id:1,
    heading:"Access your files,anywhere",
    text:"The ability to use a smartphone, tablet, or computer to acces your account means your files follow you everywhere.",
    icon: IconAccessAnyWhere
},{
    id:2,
    heading:"Security you can trust",
    text:"factor authencation and user-controlled encryption Just a couple of the security features we allow to help secure your files.",
    icon: IconSecurity
},{
    id:3,
    heading:"Real-time collaboration",
    text:"Real-time collaboration Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    icon: IconCollaboration
},{
    id:4,
    heading:"Store any type of file",
    text:"Store any type of file Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    icon: IconAnyFile
}]

export const headingData = [{
    id:1,
    heading:"All your files in one secure location, accessible anywhere.",
    text:"Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers"
}]

export const productiveData = {
    id:1,
    heading:'Stay productive, wherever you are',
    text_1:'Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.',
    text_2: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.',
    icon_1:IllustrationStayProductive,
    icon_2: IconArrow
}

export const opinionsData = [
    {
        name: 'Satish Patel',
        position: 'Founder & CEO, Huddle',
        opinion:
            'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
        photo: Profile1,
    },
    {
        name: 'Bruce McKenzie',
        position: 'Founder & CEO, Huddle',
        opinion:
            'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
        photo: Profile2,
    },
    {
        name: 'Iva Boyd',
        position: 'Founder & CEO, Huddle',
        opinion:
            'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
        photo: Profile3,
    },
];

export const accessData = {
    text:'It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team wouldbe happy to help you.',
    heading:'Get early access today',
    
}



