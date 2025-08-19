import { StudentChip } from "./StudentChip";

export default function StudentsTable({ students }: { students: any[] }) {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {students.map((s,i) => (
                <StudentChip
                 key={i}
                 student={s} />
            ))}
        </div>
    );
}