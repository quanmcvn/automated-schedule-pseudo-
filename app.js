const oneDay = 1000 * 60 * 60 * 24;
const oneWeek = oneDay * 7;
const startingDate = new Date(2022, 7, 22, 0, 0, 0, 0);
const dayName = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const dayColor = ["#FF1616", "#FF914D", "#FFDE59", "#7ED957", "#5271FF", "#8C52FF", "#7F00FF"];

function addSchedule(schedule, timeStart = new Date(2022, 9, 10, 0, 0, 0, 0), maxDay = 100) {
	const table = document.getElementById("schedule");
	for (let day = 0; day < maxDay; ++ day) {
		
		const thisDate = new Date(timeStart.getTime() + day * oneDay);
		const newRow = table.insertRow();
		
		newRow.insertCell().innerText = `${Math.floor((thisDate.getTime() - startingDate.getTime()) / oneWeek)}`;
		newRow.insertCell().innerText = `${dayName[(thisDate.getDay() - 1 + 7) % 7]} ${thisDate.getDate()}/${thisDate.getMonth() + 1}`;
			
		let lessons = Array(14).fill("");
		
		schedule.filter((course) => (course.day - 2 == (thisDate.getDay() - 1 + 7) % 7))
				.filter((course) => course.weeks.includes(Math.floor((thisDate.getTime() - startingDate.getTime()) / oneWeek)))
				.forEach((course) => {
					course.lessons.forEach((lesson) => {
						lessons[lesson - 1] += `${course.name}, ${course.where}`;
					});
		});

		// schedule.forEach(function(course) {
		// 	if (!(course.day - 2 == (thisDate.getDay() - 1 + 7) % 7)) return;
		// 	if (!(course.weeks.some(function(week) {
		// 		let weekNow = Math.floor((thisDate.getTime() - startingDate.getTime()) / oneWeek);
		// 		return weekNow === week;
		// 	}))) return;
		// 	course.lessons.forEach(function(lesson) {
				// lessons[lesson - 1] += `${course.name}, ${course.where}`;
		// 	});
		// });

		lessons.forEach(function(lesson) {
			newRow.insertCell().innerText = lesson;
		});
		newRow.style['background-color'] = dayColor[(thisDate.getDay() - 1 + 7) % 7];
	}
}


addSchedule([
	{
		name: "Vật lí đại cương 1",
		where: "107-G2",
		day: 5,
		weeks: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
		lessons: [7, 8, 9]
	}, 
	{
		name: "Giới thiệu về cntt",
		where: "107-G2",
		day: 6,
		weeks: [8, 10, 14],
		lessons: [9, 10]
	},
	{
		name: "Giới thiệu về cntt",
		where: "PM207-G2",
		day: 2,
		weeks: [9, 11, 15],
		lessons: [10, 11, 12]
	},
	{
		name: "Nhập môn lập trình",
		where: "301-G2",
		day: 6,
		weeks: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
		lessons: [7, 8]
	},
	{
		name: "Nhập môn lập trình",
		where: "PM207-G2",
		day: 3,
		weeks: [8, 9, 10, 11, 12, 13, 14, 15, 16],
		lessons: [7, 8, 9]
	},
	{
		name: "Nhập môn lập trình",
		where: "PM201-G2",
		day: 2,
		weeks: [8, 9, 10, 11, 12, 13, 14, 15, 16],
		lessons: [7, 8, 9]
	},
	{
		name: "Đại số",
		where: "107-G2",
		day: 5,
		weeks: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
		lessons: [10, 11, 12]
	},
	{
		name: "Đại số",
		where: "217-GĐ3",
		day: 4,
		weeks: [8, 9, 10, 11, 12, 13, 14, 15, 16],
		lessons: [7, 8, 9]
	},
	{
		name: "Triết học Mác - Lênin",
		where: "107-G2",
		day: 7,
		weeks: [14, 15],
		lessons: [4, 5, 6]
	},
	{
		name: "Triết học Mác - Lênin",
		where: "102-GĐ3",
		day: 3,
		weeks: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
		lessons: [1, 2, 3, 4]
	}
]);