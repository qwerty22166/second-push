const robots = [
    {
    key: "robot1",
    strength: 250,
    },
    {
    key: "robot2",
    strength: 450,
    },
    {
    key: "robot3",
    strength: 600,
    },
    {
    key: "robot4",
    strength: 130,
    },
    {
    key: "robot5",
    strength: 1200
    }
]

const filteredRobots = [];

for(let i = 0; i < robots.length; i++){
    if (robots[i].strength > 500){
        filteredRobots.push(robots[i].key, robots[i].strength)
    }

}console.log(filteredRobots)