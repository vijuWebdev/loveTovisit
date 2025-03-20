import './task5.css';
import { useAppSelector } from '../../store/store.ts';
import { getUsers, getMemberships } from './selectors.ts';

interface MemberProps {
    firstName: string;
    lastName: string;
    age: number;
    membership: string;
}

const Member = ({ firstName, lastName, age, membership }: MemberProps) => {
    return (
        <div className="member">
            <span>Name:</span> <span>{firstName} {lastName}</span>
            <span>Age:</span> <span>{age}</span>
            <span>Membership:</span> <span>{membership}</span>
        </div>
    );
};

const Task5 = () => {
    const members = useAppSelector(getUsers);
    const memberships = useAppSelector(getMemberships);

    // Group members by their membership type
    const groupedMembers = memberships.reduce((acc, membership) => {
        // Ensure the group exists and filter members by the matching membership ID
        acc[membership.name] = members.filter(member => member.membership === membership.id);
        return acc;
    }, {} as Record<string, MemberProps[]>);

    return (
        <div className="task5">
            <section data-testid="gold-member">
                <h2>Gold Members</h2>
                {groupedMembers.gold && groupedMembers.gold.length > 0 ? (
                    groupedMembers.gold.map((member, index) => (
                        <Member key={index} {...member} />
                    ))
                ) : (
                    <p>No Gold Members</p>
                )}
            </section>

            <section data-testid="silver-member">
                <h2>Silver Members</h2>
                {groupedMembers.silver && groupedMembers.silver.length > 0 ? (
                    groupedMembers.silver.map((member, index) => (
                        <Member key={index} {...member} />
                    ))
                ) : (
                    <p>No Silver Members</p>
                )}
            </section>

            <section data-testid="bronze-member">
                <h2>Bronze Members</h2>
                {groupedMembers.bronze && groupedMembers.bronze.length > 0 ? (
                    groupedMembers.bronze.map((member, index) => (
                        <Member key={index} {...member} />
                    ))
                ) : (
                    <p>No Bronze Members</p>
                )}
            </section>

            <section data-testid="non-member">
                <h2>Non Members</h2>
                {groupedMembers.none && groupedMembers.none.length > 0 ? (
                    groupedMembers.none.map((member, index) => (
                        <Member key={index} {...member} />
                    ))
                ) : (
                    <p>No Non Members</p>
                )}
            </section>
        </div>
    );
};

export default Task5;
