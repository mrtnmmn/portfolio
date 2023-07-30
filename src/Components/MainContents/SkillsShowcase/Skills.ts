export interface Skill {
  label: string
  rating: number
}

export const frontendSkills = {
  name: "Frontend",
  techs: [
  { label: "React", rating: 4.5 },
  { label: "Angular", rating: 3 }]
}

export const backendSkills = {
  name: "Backend",
  techs: [
  { label: "Springboot", rating: 4.5 },
  { label: "Node.js", rating: 2.5 }]
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

export const skillsType = [frontendSkills, backendSkills, databaseSkills, softSkills]