function solve(grade) {
    const result = formatGrade(grade);

    console.log(result);

    function formatGrade(grade) {
        if (grade < 3) {
            return `Fail (2)`;
        }
         if (grade < 3.5) {
            return `Poor (${grade.toFixed(2)})`;
        }
         if (grade < 4.5) {
            return `Good (${grade.toFixed(2)})`;
        }
         if (grade < 5.5) {
            return `Very good (${grade.toFixed(2)})`;
        }

        return `Excellent (${grade.toFixed(2)})`;
    }
}


solve(3.33);
solve(4.50);
solve(2.99);
