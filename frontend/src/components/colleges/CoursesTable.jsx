const CoursesTable = ({ courses }) => {
    return (
      <div className="overflow-x-auto rounded-2xl border bg-white">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-slate-50">
              <th className="p-4 text-left">
                Course
              </th>
  
              <th className="p-4 text-left">
                Duration
              </th>
  
              <th className="p-4 text-left">
                Placement %
              </th>
  
              <th className="p-4 text-left">
                Median Package
              </th>
            </tr>
          </thead>
  
          <tbody>
            {courses.map((course) => (
              <tr
                key={course.id}
                className="border-b"
              >
                <td className="p-4">
                  {course.course_name}
                </td>
  
                <td className="p-4">
                  {course.duration}
                </td>
  
                <td className="p-4">
                  {course.placement_percentage}%
                </td>
  
                <td className="p-4">
                  ₹
                  {(
                    course.median_package /
                    100000
                  ).toFixed(1)}
                  L
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default CoursesTable;