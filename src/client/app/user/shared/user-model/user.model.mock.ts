import { User, Gender, UserType } from './';

export const vkMockUser = (new User()).fromData({
    authType: 'vkontakte',
    created: new Date('2016-10-22T10:11:34.359Z'),
    firstName: 'John',
    gender: Gender.Male,
    id: '8875befe-9909-11e6-9f33-a24fc0d9649c',
    lastName: 'Doe',
    photoUrl: 'https://pp.vk.me/c629231/v629231001/c543/FfB--bOEVOY.jpg',
    profileUrl: 'https://vk.com/id1',
    thirdPartyId: '1',
    username: 'johnnn',
    userType: UserType.User
});
