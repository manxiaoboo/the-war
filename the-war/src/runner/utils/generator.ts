import { OrganizationsService } from '../../organizations/organizations.service';
import { AreasService } from '../../areas/areas.service';
import { ActorsService } from '../../actors/actors.service';
import { ActorRole } from '../../enums/actor-role.enum';

export const generator = 
(
    organizations, 
    actors, 
    cities, 
    orgService: OrganizationsService,
    areaService: AreasService,
    actorService: ActorsService
    ): void => {

    // 生成朝廷信息
    const org1 = organizations.find(org => org.id == 'boss_organization');
    const org2 = organizations.find(org => org.id == 'wjg_organization');
    const org3 = organizations.find(org => org.id == 'dwd_organization');
    const org4 = organizations.find(org => org.id == 'hwc_organization');
    const org5 = organizations.find(org => org.id == 'ccm_organization');
    const org6 = organizations.find(org => org.id == 'hfz_organization');
    const org7 = organizations.find(org => org.id == 'gwl_organization');
    const actor1 = actors.find(act => act.id == 'boss');
    const actor2 = actors.find(act => act.id == 'leader1');
    const actor3 = actors.find(act => act.id == 'leader2');
    const actor4 = actors.find(act => act.id == 'leader3');
    const actor5 = actors.find(act => act.id == 'leader4');
    const actor6 = actors.find(act => act.id == 'epic_hero1');
    const actor7 = actors.find(act => act.id == 'epic_hero2');
    const actor8 = actors.find(act => act.id == 'epic_hero3');
    const actor9 = actors.find(act => act.id == 'epic_hero4');
    const actor10 = actors.find(act => act.id == 'epic_hero5');
    const actor11 = actors.find(act => act.id == 'epic_hero6');
    const actor12 = actors.find(act => act.id == 'epic_hero7');
    const actor13 = actors.find(act => act.id == 'epic_hero8');
    const actor14 = actors.find(act => act.id == 'epic_hero9');
    const actor15 = actors.find(act => act.id == 'epic_hero10');
    const actor16 = actors.find(act => act.id == 'epic_hero11');
    const actor17 = actors.find(act => act.id == 'epic_hero12');
    const actor18 = actors.find(act => act.id == 'epic_hero13');
    const actor19 = actors.find(act => act.id == 'epic_hero14');
    const actor20 = actors.find(act => act.id == 'epic_hero15');
    const actor21 = actors.find(act => act.id == 'epic_hero16');
    const actor22 = actors.find(act => act.id == 'epic_hero17');
    const actor23 = actors.find(act => act.id == 'epic_hero18');
    const actor24 = actors.find(act => act.id == 'epic_hero19');
    const actor25 = actors.find(act => act.id == 'epic_hero20');
    const actor26 = actors.find(act => act.id == 'epic_hero21');
    const actor27 = actors.find(act => act.id == 'epic_hero22');
    const actor28 = actors.find(act => act.id == 'epic_hero23');
    const actor29 = actors.find(act => act.id == 'epic_hero24');
    const actor30 = actors.find(act => act.id == 'epic_hero25');
    const actor31 = actors.find(act => act.id == 'epic_hero26');
    const actor32 = actors.find(act => act.id == 'epic_hero27');
    const actor33 = actors.find(act => act.id == 'epic_hero28');
    const actor34 = actors.find(act => act.id == 'epic_hero29');
    const actor35 = actors.find(act => act.id == 'epic_hero30');
    const actor36 = actors.find(act => act.id == 'epic_hero31');
    const actor37 = actors.find(act => act.id == 'epic_hero32');
    const actor38 = actors.find(act => act.id == 'epic_hero33');
    const actor39 = actors.find(act => act.id == 'epic_hero34');
    const city1 = cities.find(city => city.id == 1);
    const city2 = cities.find(city => city.id == 2);
    const city3 = cities.find(city => city.id == 3);
    const city4 = cities.find(city => city.id == 4);
    const city5 = cities.find(city => city.id == 5);
    const city6 = cities.find(city => city.id == 6);
    const city7 = cities.find(city => city.id == 7);
    const city8 = cities.find(city => city.id == 8);
    const city9 = cities.find(city => city.id == 9);
    const city10 = cities.find(city => city.id == 10);
    const city11 = cities.find(city => city.id == 11);
    const city12 = cities.find(city => city.id == 12);
    const city13 = cities.find(city => city.id == 13);


    // 势力主分配
    orgService.setMaster(org1, actor1); // 朝廷 - 闫宗
    orgService.setMaster(org2, actor2); // 文君阁 - 安琪
    orgService.setMaster(org3, actor3); // 帝王殿 - 继山麋
    orgService.setMaster(org4, actor4); // 汉王朝 - 逍遥
    orgService.setMaster(org5, actor5); // 驰骋盟 - 上曲阳
    orgService.setMaster(org6, actor10); // 黑风寨 - 司马善
    orgService.setMaster(org7, actor29); // 鬼王林 - 幽鬼

    // 角色归属分配
    orgService.setMember(org1, actor9, ActorRole.武将);  // 朝廷 - 许嵩
    orgService.setMember(org1, actor13, ActorRole.文官); // 朝廷 - 英洛
    orgService.setMember(org1, actor14, ActorRole.文官); // 朝廷 - 白水
    orgService.setMember(org1, actor16, ActorRole.武将); // 朝廷 - 泰山
    orgService.setMember(org1, actor18, ActorRole.武将); // 朝廷 - 重步
    orgService.setMember(org2, actor38, ActorRole.武将); // 文君阁 - 花希望
    orgService.setMember(org2, actor26, ActorRole.武将); // 文君阁 - 倪袭
    orgService.setMember(org2, actor15, ActorRole.武将); // 文君阁 - 胡海
    orgService.setMember(org3, actor25, ActorRole.武将); // 帝王殿 - 山棘
    orgService.setMember(org3, actor23, ActorRole.文官); // 帝王殿 - 唐烟
    orgService.setMember(org3, actor36, ActorRole.武将); // 帝王殿 - 浩南
    orgService.setMember(org4, actor28, ActorRole.武将); // 汉王朝 - 血沧澜
    orgService.setMember(org4, actor21, ActorRole.武将); // 汉王朝 - 蔡武
    orgService.setMember(org4, actor35, ActorRole.武将); // 汉王朝 - 义少斌
    orgService.setMember(org5, actor37, ActorRole.武将); // 驰骋盟 - 廊涯
    orgService.setMember(org5, actor39, ActorRole.文官); // 驰骋盟 - 聊城云
    orgService.setMember(org5, actor22, ActorRole.武将); // 驰骋盟 - 刘三刀
    orgService.setMember(org6, actor11, ActorRole.山贼); // 黑风寨 - 郭途
    orgService.setMember(org6, actor12, ActorRole.山贼); // 黑风寨 - 千度
    orgService.setMember(org7, actor30, ActorRole.山贼); // 鬼王林 - 叶凡
    orgService.setMember(org7, actor31, ActorRole.山贼); // 鬼王林 - 王庞梓
    orgService.setMember(org7, actor32, ActorRole.山贼); // 鬼王林 - 满腾
    orgService.setMember(org7, actor33, ActorRole.山贼); // 鬼王林 - 蜀达
    orgService.setMember(org7, actor34, ActorRole.山贼); // 鬼王林 - 单陌
    
    


    //在野角色身份分配
    actorService.setActorRole(actor6, ActorRole.在野); // 临冬
    actorService.setActorRole(actor7, ActorRole.在野); // 龙文
    actorService.setActorRole(actor8, ActorRole.在野); // 乌鸦
    actorService.setActorRole(actor17, ActorRole.商贾); // 江馨凝
    actorService.setActorRole(actor19, ActorRole.在野); // 烈峰
    actorService.setActorRole(actor20, ActorRole.在野); // 刁炎
    actorService.setActorRole(actor24, ActorRole.侠客); // 丁农
    actorService.setActorRole(actor27, ActorRole.侠客); // 虚伪剑客

    
    // 城池分配
    areaService.setAreaMaster(city1, org1); // 北境城 - 朝廷
    areaService.setAreaMaster(city2, org1); // 建林 - 朝廷
    areaService.setAreaMaster(city3, org1); // 丰阳 - 朝廷
    areaService.setAreaMaster(city4, org1); // 康城 - 朝廷
    areaService.setAreaMaster(city5, org1); // 商平 - 朝廷
    areaService.setAreaMaster(city6, org2); // 茫城 - 文君阁
    areaService.setAreaMaster(city7, org2); // 雁山 - 文君阁
    areaService.setAreaMaster(city8, org3); // 景泉 - 帝王殿
    areaService.setAreaMaster(city9, org3); // 青峰 - 帝王殿
    areaService.setAreaMaster(city10, org4); // 夏川 - 汉王朝
    areaService.setAreaMaster(city11, org4); // 慈恩 - 汉王朝
    areaService.setAreaMaster(city12, org5); // 庆兴 - 驰骋盟
    areaService.setAreaMaster(city13, org5); // 颜水 - 驰骋盟

}
