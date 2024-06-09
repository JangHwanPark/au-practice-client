import React, {useState} from 'react';
import './assets/scss/index.scss';
import Header from "./components/Header";
import Section from "./components/Section";

// JSON 데이터 임포트
import schoolData from './data/school.json';
import practiceServersData from './data/practice_servers.json';
import studentBenefitsData from './data/student_benefits.json';
import frontendData from './data/frontend.json';
import backendData from './data/backend.json';
import databaseData from './data/database.json';
import cloudServicesData from './data/cloud_services.json';
import referenceSitesData from './data/reference_sites.json';
import webBrowsersData from './data/web_browsers.json';
import cmsData from './data/cms.json';
import etcData from './data/etc.json';
import Footer from "./components/Footer";
import GridLayout from "./components/GridLayout";

const sections = [
    { title: "학교사이트", data: schoolData },
    { title: "실습서버", data: practiceServersData },
    { title: "대학생 혜택", data: studentBenefitsData },
    { title: "프론트엔드", data: frontendData },
    { title: "백엔드", data: backendData },
    { title: "데이터베이스", data: databaseData },
    { title: "클라우드 서비스", data: cloudServicesData },
    { title: "참고 사이트", data: referenceSitesData },
    { title: "웹 브라우저", data: webBrowsersData },
    { title: "CMS", data: cmsData },
    { title: "ETC", data: etcData }
];

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");

    const handleLogin = (username, password) => {
        if (username === "admin" && password === "1234") {
            setIsLoggedIn(true);
            setUsername(username);
        } else {
            alert("로그인 정보가 올바르지 않습니다.");
        }
    };

    return (
        <GridLayout>
            <Header
                isLoggedIn={isLoggedIn}
                username={username}
                onLogin={handleLogin}
            />
            {sections.map((section, index) => (
                <Section
                    key={index}
                    title={section.title}
                    data={section.data}
                />
            ))}
            <Footer/>
        </GridLayout>
    );
}