export default (sequelize, DataTypes) => {
    const TeamMember = sequelize.define(
        'team_member',
        {
            admin: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
        },
    );

    return TeamMember;
};
