import "./SkillsShowcase.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StarRating from "../StarRating/StarRating";

export default function SkillsShowcase() {
  
  const [skillsType, setSkillsType] = useState([{
    name: "Frontend",
    techs: [
    { label: "React", rating: 4.5 },
    { label: "Angular", rating: 3 }]
  }, {
    name: "Backend",
    techs: [
    { label: "Springboot", rating: 4.5 },
    { label: "Node.js", rating: 2.5 }]
  }, {
    name: "Database",
    techs: [
    { label: "SQL", rating: 4 },
    { label: "mongoDB", rating: 3.5 }]
  }, {
    name: "Softskills", 
    techs: [
    { label: "Teamworking", rating: 4 },
    { label: "Critical Thinking", rating: 4 }]
  }])

  const [selectedTab, setSelectedTab] = useState(skillsType[0]);


  return (
    <div className="window">
      <nav>
        <ul>
          {skillsType.map((item) => (
            <li
              key={item.name}
              className={item === selectedTab ? "selected" : ""}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.name}`}
              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <AnimatePresence mode='wait'>
          <motion.div
            key={selectedTab ? selectedTab : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ul>
              {selectedTab.techs.map((tech) => (
              <li key={tech.label}>
              <StarRating label={tech.label} rating={tech.rating} />
              </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
