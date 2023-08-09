export interface Skill {
  label: string
  rating: number
}

export const languageSkills = {
  name: "Languages",
  techs: [
  { label: "Java", rating: 4.5 },
  { label: "Python", rating: 3 },
  { label: "JavaScript", rating: 4 },
  { label: "HTML", rating: 4},
  { label: "CSS", rating: 4}]
}

export const frameworkSkills = {
  name: "Frameworks",
  techs: [
  { label: "Angular", rating: 2.5},
  { label: "Node.js", rating: 2.5 },
  { label: "React", rating: 4.5},
  { label: "Springboot", rating: 4.5 }]
}

export const databaseSkills = {
  name: "Database",
  techs: [
  { label: "SQL", rating: 4 },
  { label: "mongoDB", rating: 3.5 }]
}

export const softSkills = {
  name: "Softskills", 
  techs: [
  { label: "Teamworking", rating: 4 },
  { label: "Critical Thinking", rating: 4 }]
}

export const skillsType = [languageSkills, frameworkSkills, databaseSkills, softSkills]