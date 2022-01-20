const student = {
    id: 1,
    name: "홍길동",
    dept: "컴퓨터공학과",
    grade: 3,
};

const students = [
    {
        id: 1,
        name: "홍길동",
        dept: "컴퓨터공학과",
        grade: 3,
    },
    {
        id: 2,
        name: "이몽룡",
        dept: "전자공학",
        grade: 3,
    },
    {
        id: 3,
        name: "성춘향",
        dept: "소프트웨어 공학",
        grade: 3,
    },
];
/**
 * 모든 데이터 조회 query
 * query {
 * 		students {
 * 			id
 *     		name
 *     		grade
 *   	}
 * }
 *
 * 학생 한명 조회 query
 * query {
 * 		student(id:1) {
 * 			id
 * 			name
 * 			grade
 * 		}
 * }
 *
 */

const resolvers = {
    Query: {
        student: (obj, { id }) => {
            console.log(id, obj);
            return student;
        },
        students: () => students,
    },
};

export default resolvers;
