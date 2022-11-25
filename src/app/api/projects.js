const projects = [
    {
        name: "Hotel-booking",
        id: "acb4828365eb407790ef52a2d8b54f57",
        created_at: new Date(2021, 10, 11).getTime()
    },
    {
        name: "Fast-Company",
        id: "aee1d164e2c4490b8cf4c5b0162859b6",
        created_at: new Date(2020, 5, 5).getTime()
    }
];

export function fetchProjects() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(projects);
        }, 1000);
    });
}
