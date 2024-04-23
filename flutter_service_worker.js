'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01508a2af6ba9b27c904804a93aa2b93",
".git/config": "df709257e97974886ada8664984331af",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3aa09fb4ab7233d5fc690c5c326e05be",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ee803c09dcc2c12d7f9f3eb2e43c3846",
".git/logs/refs/heads/main": "b744b2aaec5ed87485a1e4593d3cfb03",
".git/logs/refs/remotes/origin/main": "6224c105049a3c232e063caf31c36eb6",
".git/objects/01/f3e53327bbc6e0c46f2c8e0df728d8ca41e83d": "1d2b45ba4de1322674d6a87725adc0ce",
".git/objects/02/1ff1a8c58a3fb35543e8fd65c06abf6efc2af3": "f11ee61600e04216c053b48fe01d821f",
".git/objects/02/dc0a0b8b956a5b2ea92e039436be972596194b": "3987dea1b09dbd95fa1584761037814d",
".git/objects/03/1478bdb1c52abb2583260f9734472a16e2d26a": "7692cbbf678a9afaf8d59f386a543a7d",
".git/objects/03/236b69b20c1a4e1174a5c5b531e67d5597c8c5": "0edbb0fa374bebb85c048969322e25e2",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/07/88045fd624bd0122e610e51f9f1a6a7ed1e37c": "8a4757044b9dcfa7c3e84d949ab38c1d",
".git/objects/08/03eeae8f82442333ea78c1c6a59b77e1076753": "b74bdbcfc7361cbb3d5b4bf91bda5ff3",
".git/objects/08/61fe0398f0590ba6eb723a582e3902d1c2838e": "7aa68ac09e50eb4f7d354c2672081886",
".git/objects/0c/17fa3d142b3a4618493439d79412511c2e1b48": "8587b0d161327c92597c3e4748025e3b",
".git/objects/0c/c40fd3252bce86e3f0835afe37945bce11c2c9": "3fd519c831ae1fabcfe6b0b8c17f3a42",
".git/objects/0d/5d7a6212137e08cf4d065305cd46fbc9041343": "02879b78a41560ae60460adaad4a20f9",
".git/objects/0d/c9186e9b7fa4c3c8a3f73f0e6ca4044ef00b05": "025841879e69028078be9b8002ae42cd",
".git/objects/0e/0e69d1a78b277104174979446ea881590735dd": "26500ba991d85691689d9eb8e56128bd",
".git/objects/0e/6c4e2f5fbad070b18ed226ec336dadb1c5275a": "ec7a8e16ab4809f804903073979c569d",
".git/objects/0e/7fc2cc7d8d0ebf8ceb7d38be8454a90e3814ab": "3f83f1cf08651253d128fab28e6a1ac6",
".git/objects/0e/ceea079b9f3ffdaeaeda7c3be55fe079121aad": "710ba81ef7b7df8010edbb304f456334",
".git/objects/11/2745537547ca2dd3ee3295d0ceb87910178454": "782fab99caaaa58e953415a2bc32ea31",
".git/objects/12/cba448ca347e3804a9a977124a34b0c3702e8d": "a639f4501643392e56ce7407f4286abc",
".git/objects/15/8e0b27680aa4a671b69022566c28a0d8a330fe": "3b07b926d05107949b1fb4ff77f49722",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/17/1de6ba07a70b7074c558b8263a33587cd7d091": "523f4839be6dfc02e222006caee050cd",
".git/objects/17/635a414d9d03ad2fe666aeafc734734572cdde": "13cf29b5ff6a6a4df992cc925316f12a",
".git/objects/17/d7359b019a199495275ffb1ca00a136319598f": "e4e180cbac02e01418aef32f5ad4a373",
".git/objects/18/4b98ed8c55fbbf7a234001ec89b2ef089b54e4": "52d6d62aac4b2480fbbe5927862a2bc5",
".git/objects/18/7a0e11ef3518c2e256289fc1ade3d7cbea3c61": "9c2bfcd554b474c26ff4b378c41d2c7d",
".git/objects/1a/421f5733a975f0e3ea4b1671a8ad22ba2d0b8d": "ec84ba14bef5be84761d802a2c3555ad",
".git/objects/1c/dbc990a1e9e2dd06562f94ca77ec900b43f1e1": "8f767a9cf505d08e2ae619530c8b47a0",
".git/objects/1d/b8de4a8828a43fd44f8a984c11dd1fe3a282bb": "3bc420c1c859585b1cc7a6b3f732f302",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/8b7c13c343cc991c08e1892620f6a530ba18fc": "61d9f10023e949d6b85cc93ab93cfb38",
".git/objects/23/57ad975e73ccab2c4770339ccafe5bf3fb8d29": "b1f7cbacd5b0d010cb2e08919dd52564",
".git/objects/25/fc3ca976a83f56ad0ee5d7b38789345f3afaab": "103f89abb25e039483bb4d69190a5cd5",
".git/objects/26/76acdab1d34f6591c9bbcf2e3a05b983a7b5b0": "5b4467ac97638dd17056e05a590efbda",
".git/objects/26/bcd371f56eeeb010322cdbb60c9ebfbd0f6635": "6b7c3f4bbe16bc096a4b48abd0a2e5a9",
".git/objects/27/541d6194ab66ba58e106504479568e028968ec": "897b120d23ba681880e13624607202e1",
".git/objects/28/9e4cd70b3cf624abcbff79d157ad12e981ec7c": "e8ebc1863e4e18aa94b2641f2fbd5439",
".git/objects/2a/95263829f0979daba65c0af3961e2358e4b36f": "3b0dadfff729bc38b65ab1f8cbc5ebda",
".git/objects/2b/1dab4594f632bf06bec6696c4d165fad4ec648": "e6398dc05a62c924948984e4b3a1d213",
".git/objects/2c/df5a7ecd91545123203611e5e45f2d818c7874": "baad3408cfb057f0b9f57eaa50045426",
".git/objects/2e/6233f82c926d95965abffae312afaebbd7cf2f": "cf59c29d07313ac29b0c91bf90a04262",
".git/objects/2f/a62c9e0f9e3f2af9ca52c074d31a3afe6177b7": "df09bc2149ed8a954f078580dc46f15a",
".git/objects/2f/ce09cb72e7f9395f71c369bb481dd02efd639f": "adce3aa907bc29b1fa4eafbf4def13c1",
".git/objects/30/0be2b95cd122409b8ec9cbed05ab235c4c6c93": "af56d7d365638f956c5b03473b076749",
".git/objects/30/2f51768eb2389e6a63214197933a47399b9cb3": "cf1728cad8519db1b8e375376cdec043",
".git/objects/31/bbd7832422b709ef5b1bcc9a014bbfb8f9baec": "56b77569a1b3a4f9231939155da7e6e6",
".git/objects/32/0a076b42f39e28e0c3401ebf4612beade835f5": "7b12a182b12ca8b2aed1055fd7244c6b",
".git/objects/34/4b92ef63b67145f74f4dc3e37bb21640ca8fa8": "52689ec0e6be4b36283096896c1544b1",
".git/objects/35/1541519a6e951dc77d38a65967429608bfdfeb": "5dc9e0c3a436de9a2de00a504f51cddd",
".git/objects/35/b49c49a9313e23cb204c83df40ce8bac80b17e": "1f504e2b6ed96f11526fc185f16a5625",
".git/objects/38/30e1f781b75d8723521a9d12cf92db22912040": "a5ebe83bcb9a081e5e6f8f032babdc7f",
".git/objects/38/40ff320bb52ca4a61a191d48e797b9adeaf5ac": "548bb20048052fe65d8aace4b1b56a14",
".git/objects/38/fdd6b4e20e9001281c729ac55690393bfe706a": "1efa8d687c3e1aea80307c6090009533",
".git/objects/39/fd017ddeb5773eca99549002b9caf3d0d18110": "9a8068b2c51617e3e46b60170c00c4c6",
".git/objects/3a/5639003f7af6ad03b9c7d9782003abc38b4840": "befc656cb8b0068bab463202e2bc8281",
".git/objects/3b/20464d4d8c803c17c4ed04e6609bad48020edb": "9ad1e4100529bf43e3b0ee5b7c364c7b",
".git/objects/3b/4f77122f6950aaf4bb8a937ebcf1a1728f9de7": "bbb68fe74634301bfdc339bed7c1c0b1",
".git/objects/3d/05b0f571176cfea00c2a045a595ee0081419f9": "c5f75cea81a049519887863b7d271a28",
".git/objects/3d/a09256fdbe25b4ff08e7e509f432977a630571": "4f66f6c9676009216cb1b1b8e1b26617",
".git/objects/3d/b50bdce1a6be13a503c4f9aa137b7c4763df6b": "19e60b99786b795717696f218106fcb1",
".git/objects/3f/3fec753cc1c8c7f5e8ac45a9f3c291708a2d47": "822e092ed3a28048d5005482b6815eea",
".git/objects/3f/9ee1a7515dc68cbcbcd2330fe1560a799eaae1": "26d993b4cbd516168ec62443bb14ac9d",
".git/objects/41/fd466f427f1c7b5beeeec4813c2ceacc87c053": "529499594924c1e4e14cd3effae5b8f5",
".git/objects/42/44445a4c33bd1f518d0ab7f91904f25d58eff5": "5d09906c9b55d3afc24d938959dd04ab",
".git/objects/42/6602cfe4ba84f8dbfad3ac70786626b35ae0d2": "bb836ab031660056d8d3698f88f573f8",
".git/objects/42/897803d5913550053e6a385d2008d172c4cf04": "890e3324cc00d7538e33ef8cb1bfc8f8",
".git/objects/43/d0203b61384ded636721c9ba3229f876c4a757": "666c97bd0a1a50ab0dbb4e41e1cdcf30",
".git/objects/44/00b29e06dc46044f943c3a1431cf1070b80576": "2ce044f4fc46ef63a1be0e67183d4f01",
".git/objects/44/de3d9c264e653771b5aea2ac3babe7f2d3c355": "2872290f11f5c3bb1df83f81e8ecb7ca",
".git/objects/45/3268d4afd2c247986536ddc88057e2122560f9": "ecd41f4f9f82453006ca78a36ca08e9d",
".git/objects/46/7e86cf6db4797e1c0fc5c036cecfb0c953ab26": "f0bd11b01be52f7a4109c17b0d6a3c87",
".git/objects/46/cdd6c63a1ede3d0c8e21f998a081cfd24cfe89": "cc2a82acd6b3f47a67f8f7be1bef6016",
".git/objects/46/d6a83facb69f440466f5fee69a0bc6ebba7cd8": "31c23fe124abf35dd3b0cd23fb1db39f",
".git/objects/48/8b498424986328fedaf7c8bb79c956406f3b56": "fb44e3f32aa566e1e562517cf07bb5fc",
".git/objects/48/b702b3d2a38f8c6a8ef1b63f192641a949b461": "5b0f6a31954a94a1b2171ca6e6bccd2d",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/9f024418b49a470be5f3d1d43b0520966cc2b1": "f4d9845bb4796bf510929fd5d1639051",
".git/objects/4e/37349a99fa2bcae2047ceb5c18607aece2f45a": "0ed58e5d600672951a975f38cdf3b379",
".git/objects/4e/9564c1391b770798eb73a214e6f86b0b57d5aa": "17b7e73c0c61ada67db480c0fed3fd43",
".git/objects/50/784c28c5913746dd12673c0bdd7628239ef512": "843d2692fbc921b3dd409c011ef11e38",
".git/objects/53/0c9e11ba35de8402dd192222b4e73f9169ac30": "4a4d788b66761dab4b79ca06534826b4",
".git/objects/53/748e66b04590ddcedd97006cd618271df1a0e2": "301def7605506dfddd4f93b1251da313",
".git/objects/53/918e8abab6f9d30b9a7d0a3046106e549a1417": "770a93d73867565272723960f3eeede9",
".git/objects/54/7b26d53b581143484e06355121646eadf1e89d": "927cd2168884ef45337ca2c43dada89b",
".git/objects/59/3173b4a731c99ff11db3e702efb82aaf482ddd": "115393a6570d60535ff867f2b1e25cd2",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5a/e7dd50517dd5902600a24620cdc7cf2e038de3": "6777b9facab24a8bcf4df8b2549cef1c",
".git/objects/5b/1622cf971265840af2cee43bd97089e732ffcc": "de642d794ea7a7cee0230b2c8575545d",
".git/objects/5b/531f6ef6db0d0b7759ba40f9e836bc6e72ad25": "0747bb1f92534f8437ef6bcb08cc10b4",
".git/objects/5c/707bd0c1ff2c1031bcb120c9979f6aaffaf771": "3bbfbe72c2c8011f1e4faf0c2bded0b1",
".git/objects/5d/e12250beee5b04b3a7ca93f34d551bc500e52e": "c71d47c0019531644d484858ffbba028",
".git/objects/5e/63bbce04e8638b97a567d8f8f3df82bc402003": "f6c4e7cebcf6a3db74dffbbde49e86cd",
".git/objects/60/990b313246dd4ccf9dd8c4ad6417fbbc8d2c39": "a7a822921ed4e0304730a1a961785d67",
".git/objects/61/183bba578f3472947b74d68fd52b875cfe9b60": "7185949324d7c11e7df4e81576678918",
".git/objects/61/c8d78ae787b212bc73d08f91f3ae279955aaae": "163f22c888009a9527469242a447e0cf",
".git/objects/62/39028a9fc66a887a32075fe13880b5dab59ffa": "42c5c0269a1ad405536cc302d034a0d4",
".git/objects/62/567769f790e8411b9322d955c780752d388a78": "8d9a8b521118cd04a47122e8432c7762",
".git/objects/63/81a9010c738f7dffe642c9d52c063dae6caaed": "7dd2fd24e6e69d8d82c8338ac4d2541c",
".git/objects/63/93869ae16c3bf3f771847c8c9ba5e8c1e04c22": "e9aacf61746da353a244ee351d47c512",
".git/objects/63/b68a76dfbf169b65a8138755c771c6ffd5bf00": "f06f1e6cb6e25741a240db8611bc7953",
".git/objects/63/d41aa0d53ccfcc4dd530e4f6776a351af6a4b2": "8cdad911f48659753afaf617f159a847",
".git/objects/64/55e1400b28d3868fbc28f80e55397c94c5ebb6": "b7d5017242da01580105a825001031a1",
".git/objects/68/27320ef19c30dc7d335b615dd5bac018ba98ae": "d7e16fbe0538d83242ed959a4c33993c",
".git/objects/68/7b883fc586b3079f0096947e6cdf039640bf33": "f519de2a226720d287ae3b27398e67ec",
".git/objects/69/b33810b6f74bf0bb4a2b55d0c97dd7469f6272": "7055fe059c50ed614a11a083bcfb6e3b",
".git/objects/6a/c56ccf5f1e17308f5964d8c3d55c3cf5b436a6": "d3d737945ab31d68786cf8b76af55b95",
".git/objects/6b/9277712ba404aa93eb12aba05796bbd801ec7d": "7347108103a22d7630e56527b9905f67",
".git/objects/6c/1d494b54163216ae8cf18344e88bf2e5a1a8c9": "ef0c20b6c0f62208ef60ec16ed131bb4",
".git/objects/6d/184edebaa8b0cd30ce6266def6c6a463210d15": "575708e75086538778e7988341fab8c2",
".git/objects/6d/762fd2b9700045afd2a1872ef39bf2391076e0": "bcc3c1cf73a5395092d2a0ab8bfcaecb",
".git/objects/6e/6592b25ed5a49ee67fff62c279cc3ead8d94bc": "66c269538be03387d8236891502d979f",
".git/objects/6e/c393ca30c0d5a37de156652e3691a67bf496a1": "7ed7f378225d69a2e4741295e5d2f6f0",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/73/923471c2686559bfb4ce671e42803f7c55fa7b": "be94868658dace15bd4ace794f5e3a29",
".git/objects/73/a3b283e93c571b66868da5998c3c9f177948f8": "e7da96b7cb7bd84b4a50e8a5d0a5f204",
".git/objects/76/5117193e75d6cf8d36072ab2670175918f777f": "4c22cf44c67fb615d2ed80276c66e426",
".git/objects/77/6bcdf8fa5f65043b9b1446016fdfbc42bbc831": "296a3175c7f1650ade1ce68969102da2",
".git/objects/79/749d685733e3557e4e8bf4bf795bcbfb562a9a": "5522dec9821068f897a5f1e6688bcca0",
".git/objects/7a/13c15b6d7d70a4296f8d0bfd3e589a225a2cee": "c34ac03ff4b9e99f67661e800aa4ba07",
".git/objects/7b/e3a551190f143a8831765b87d42f9d0f8a1972": "2615be0a8f78e3fa84cca5702e97ba84",
".git/objects/7b/f49231a6447864f6d726a4ca5b42d46f45d891": "049433b39530d3ba1d92435082ff59d2",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/36ae77c52a2c53fc612dfb955fd63056d3a74c": "620f26e8cf9cf1b28d3bb6f58ddfbfa8",
".git/objects/7d/06a2e2af7a680c74635f6a2cf746077c5da17c": "94fe92d8a058dff6786074f8cad9c7dc",
".git/objects/7f/88d683b468b6d02b30b89d8b3959d84390f787": "cdac71df427c5c01054d6d8b99f48dbb",
".git/objects/82/37c9ccf0f3b40e931cdaed93097ffea199091d": "b7ca9a091e7af206da70325f97f29afe",
".git/objects/82/4add1c37cb18ead44583386c0176a990e3a705": "8bfeb7d27ae0c11f25500170c0c3e5fe",
".git/objects/82/90b4507e72c959472b8e83e794fbb16659e262": "e8da94ce84227e9c2d36ceed2e3a01e2",
".git/objects/84/c3b80f14bb73dc1b0ed73acf708295fc58d570": "9c6214d9141f2cf2c7e7e61fa92bc614",
".git/objects/85/ca5a275091dc296a7c723352973bae9acce949": "497bd4a4af81122240a8eb09f18d6cbf",
".git/objects/85/f6e4a336f99a22b6a8aa58c9ad40775bf5e408": "a6b92116d3c18dbf9743387a204379f8",
".git/objects/87/54ea2b1024f531cb720c8dfaeec0dc96d38746": "26c4c1acbb409423ec1ac4f8c4061284",
".git/objects/87/58d8bb01fc302a7a22bba088843adf7aa2336f": "e52839fa56d8c61eb51af5cc5691e4b8",
".git/objects/88/47135e70baff97882dfc3bb16249e178103e28": "9f72e7a5b43a18298b6d946d3b8b9dd5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/fe6a31f079134deb139e6521e52d5271f15107": "de72087e3b574394713aff2115f48160",
".git/objects/89/588854f92371eec0c2654698883dd7a277660a": "e8da39737299a70fabbe2756de6727e7",
".git/objects/89/60947ac41f829d69db9a9fb52f8cee54ee7120": "3dc5adb5beb378c6ca56aa9dc329e99d",
".git/objects/8a/68869f723ea3b1aaf253f3eb10b68026b18024": "6b80ee1bebf72f0f6a3af8e425ba6ee3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/917c634444e5efe429fc6416a3475ee17cd874": "c6beae78d82eee7dbcd7ed2fffcabf25",
".git/objects/91/0d939fe6bcae3376178bdb457c9bad351a4614": "6c2dd2d2233cb550532804f76ea78f03",
".git/objects/92/9c91bd65cd7aaeee2497f845c71a4058c7b327": "25b9af8ec29dae2143cf86df5fc328c6",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/01b601fd6a86b3e7dd1762f29a3adcbbcdf113": "27c95935c5002903f84f7ab3d98178dc",
".git/objects/96/a9511e1b8b244f3c3b261b916ee4b434873349": "ff4c584bd06d9229c74f3c643c8392a8",
".git/objects/97/80c1a3ea8e13c5651eaf74372d454902d4ef2a": "d934ab9843986b5797ef8dafcb1d6611",
".git/objects/98/d926e9c352e5d51e644956c12d3305b1c781ff": "142a20922fbd504331e62b62b6c20fb3",
".git/objects/99/ca6cd024f59756d804b305016f3737ffc74c43": "6d531debe25c0bc996f0fb9b2c5c82c8",
".git/objects/9a/dd320befadea6ffb943bb849f49bc59df241fc": "7a8fdccfa9fd2cfdb0b7220d006ff262",
".git/objects/9b/9eae6266a6a773af111ec23424321fb629b90b": "3de3899fc0eb61a17f3ef0d651ae8923",
".git/objects/9c/7f802fa216dd338bf2111f9f8b5b09e17bdcf6": "383940f041518a7b4f04cedd694b3b29",
".git/objects/9e/17132bcf342c0bf2b475197d71529bec433058": "4e4b85c3a86734a65536f34f4fb9778a",
".git/objects/a2/937f68c153d94386cf77a988b073a61dc911d4": "28b168db761fe7eac16013c45076925d",
".git/objects/a3/e53dba872b1aa52752324866ddd2dc7dc1d7b3": "80ef859436f772d8bac3299933a43714",
".git/objects/a4/a712fe8e6a11c33d4e5c954f13c802c3261a48": "fb43f593eb548a61640de12f88f69154",
".git/objects/a5/dffc5bf8f9929578625399373a955d81a8d7bd": "b54ef29254feca2879ddd78c8eea728f",
".git/objects/a6/3b35115d132eb90d50878e2f61aa90d96f8c58": "2e3269f2b99e377a47480918d9cb5f3f",
".git/objects/a6/51c0d2622c85e151fa094c60822ff72b04d51e": "4d66215033f802572f37f10cc7a175a2",
".git/objects/a7/728fc57e4b51d8251efe6d188fafc1669debff": "b09b21dda1c1add1ad5b865d7f221e75",
".git/objects/a7/96890e86d54927c89c1b8b63410b323ce84e30": "b70c33d42777d7f666f028f16c6ff36b",
".git/objects/a8/9a98f0bb7af764f4b15838cdd8d4c29b5df595": "ff443706758966adda9fcba22b3618a4",
".git/objects/ae/2643066723391fbde46ecbad1c638095323044": "29e1e78bf7e3a87a0adce767fe473c9d",
".git/objects/ae/c449dbef2b0d92aac8e01d4679c16c8935c577": "4ebd3e7ddda2e6178e3b1b3d4898e78e",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/af/e1e28a27e2b931b19b2d9c2e17c3d581e0fc19": "86886d2bb55c703fcafd14e8af67a61a",
".git/objects/b0/982a0f81e39a767b0afe378a053c803fac602e": "6fce301edd8f9f3693d80c3004e68c1f",
".git/objects/b1/1f227127e8dd041f9960b32097cd714ea930d6": "139d6e1512078a6c3c0581734b1f4de5",
".git/objects/b1/99313645d8c4a1bf104b857de0bfa4ab7f6cd6": "d8ec4fae21e024a8aff60a95c264ebe9",
".git/objects/b1/eb5a494c44e852926bf6948951e03ec34a8d45": "2ad7dd0b6f79c349dcf5dd403ff64f8e",
".git/objects/b2/e8ec387d80e727271c3501d3d437a8ba921a57": "361228417bffce3dd28ea59b02417f5f",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b6/c1fa476cbefe805cc287c34a88478350b9bfa8": "130bbbc36ed9d22455256578b95ff6d4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/60a024312d28c74131d7a9ccb06be9652ae177": "a8521742574679725fde3e837c3b5172",
".git/objects/bd/8dd59cb20427b5a0dc04caff14a6f2b8bf38b9": "5ebdcbc3e57d80dcac00f424136e4a95",
".git/objects/be/731c42421e91e7d35f620ddfe009c3d42d78d9": "f22c537a73a172d749821eb443696783",
".git/objects/be/a22035028dfea0b41bd2218d9b67bc9fe502f7": "851d69ba0ee0296dda03de52ad9f83f0",
".git/objects/bf/43f0416f16ae50a0d075aab8b7208a12a56368": "ae5cd1a637c9fafb73dbb3a0edbe1651",
".git/objects/bf/716d6afa303ff00580547f15906fb14ee84ebd": "ce7cf0482cf9dc796ad6de2c2ab95099",
".git/objects/bf/799991a0f0d4b5c5375bdb7c600dbeff4e78ae": "16e97f2cca82242d124a3cd49c39df10",
".git/objects/bf/d4906023557f0b506215074813f8e63c23aced": "117ed7f8c9969385baa7244b6ab1d38f",
".git/objects/c0/11997e0c6cdff7a8343a3ce0bb95674f6dcb44": "f315e9bca473dcede6500230605240a0",
".git/objects/c1/7bb0d50a4ffa89dd0c74b2d89d3e4ce4c4987d": "b476f10277cf55fcdedd5cd6d2b8e48d",
".git/objects/c1/8d0b9e37b27066df390ee958eead6516907c6a": "a5ee8b43701d2f74e1798ac194ce137d",
".git/objects/c2/b66a4fef8307b65b33ee4b52737882c5d03755": "2b34a2def2f935cbfa9444009f2cd164",
".git/objects/c3/98a0fbfcbf9d750bf4baa4c19b5020e0eccd43": "316d35cd86c4e73ac8642819a2e9beb0",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c7/334e3371a70350e1480eb5b3748406543f90f9": "5e4836441b989454eedefeaae5e4156e",
".git/objects/c8/09729322ce2ee00d9e32566c4e12c9645f1c1b": "0bc149e64367ea574af64d93976fd834",
".git/objects/c8/3ef98117ec002ff8b187c839816990cd706b52": "04b6ff03277689c2ad996f59809f6864",
".git/objects/c9/038b0e49c760004c37be901f1ccf39de2c6c73": "65764650b7fbf2ed3b4ac9c10de1c3b2",
".git/objects/c9/e552d2b6f198830191cc362062a22e107f25b4": "f2857acaee17cef21041d1e814a82393",
".git/objects/ca/5e1a02a334b1d83ac095d08a6a4e2cf03ecb3b": "64b6c2ed4828e2fb5a3184da77cb8421",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d1/44ab4741ee894bbd14f496c4af51e032d6d4fe": "2562e00393888679eda71899dfb3ecee",
".git/objects/d1/b7454cd10dac3d21e1fea23f081b69efa7be33": "461f807a1bcac78706d02cb403346677",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/6ee6c0edcdb3af1f24bb43fae96d23a8ab2b91": "ae6947c2cde2ee4aae90f49f866443cc",
".git/objects/d8/f6ff888bc143e4ecfb8deb5ee3cb1c93142f82": "e15221cc793571ad7f1e2be340cb7ad5",
".git/objects/db/977d5b7f7117f50a87c0471956609ef0d724eb": "c12c90867dd33511b548cd93b5be6e2f",
".git/objects/dc/c2acfab6b9b5a855068a16467a78615d728bdf": "7640561ec8a5072bb126ff978a80bb51",
".git/objects/de/648085561f09dc46425570d3ed84e5e26459ee": "f1809d815c9d5bd6d458e98ac8ad306a",
".git/objects/e0/d082e2c735b4a4cd8a9490d82b8fd486243701": "f71bf497c6dfcc5cf01bb27ee4a1493f",
".git/objects/e1/a0105c309db500271c31ae9d132da87a3c321f": "fe431a5d4123910b2620e97bd37ece33",
".git/objects/e4/e7c2f63709472ca1022c88ef2135f61ce46a7d": "5c816a374b40cc935f0cc72338e53566",
".git/objects/e6/d93ddd9020d1898c38246227203fdc2771822a": "084caf7e8d92542be15c319d88f983cf",
".git/objects/e6/f67595a639dd14b1f43d4405ca45228d5f09ae": "4148421a5b2fc7a3c3ebda9788e2c08a",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e9/0aadfdd63bee9af21f7ca8323b32d80b6d463b": "d3c52224523dbe7651121b34295ffe29",
".git/objects/e9/efb3dc874e097ec909e90bbcaf419cd863c37f": "5b0f793fb13771adc99e676acf281684",
".git/objects/eb/398a7a68c73055172ad496db4d7f0d50c2df87": "a93ceac6ba3fdbb7e60705441842dc26",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b686dbc11460fbaf138c7ae50aea4f2276fcdc": "63825c3486d46e68b90d4005cc186143",
".git/objects/eb/e73e69e5715dd6d76e0fc28dbfc8d9c25fa05f": "adb10137c89d9bf806f27bc95f402050",
".git/objects/ee/9b847a663e6136216b92a042f41db5eb30864e": "864a709c59a4b78ef617ef1618b13056",
".git/objects/ee/b6d72781399ba91f712e1ee6f4f60d2d8c58b1": "c656e3e23e620d909dcac00a8401bbc6",
".git/objects/ef/1fc4f2ee9b6d75151b05fef53e83cc24f00b0b": "848b3e60e216e3621ca14a29ed75f8aa",
".git/objects/f0/7b5fdc3d769d387abe0fb2bd7aefa986382c9e": "2b8cba1497cf5223172a58e284d7a730",
".git/objects/f0/8d0270f70840b49e989fad7c88bdca4f00d77b": "cc70ae7a9351c063c904c555af53b19a",
".git/objects/f1/6020caa4d45e4682bc78236b9bb135c1f216e8": "cc35b100b311a702f50e33bb851f4cca",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/f6cd2c261d355373b0c2772ed04daa9a8e3c8e": "a7834c2858d6398408f33610c20f2b70",
".git/objects/f3/b0dd571889025ff3b41455109c4a1b8e2a7053": "90bdef17a5811b9df4db6ff5dbd1ba7d",
".git/objects/f5/76c81b04716db65dc998933faf65fde498e67d": "a488ecabee181540e4a5fc99ea9c297a",
".git/objects/f7/10b6a1daaf04757fc47e81ea537377c82cd3e1": "62473ae7634020fe523a85387fa07846",
".git/objects/f9/336049983952ce445e4dfcc03ef15712d7a3eb": "ff197bc812a7683028fb56ce4f167d04",
".git/objects/f9/b22fdb655bb3cdce26a51de1141cabcb39ee0c": "4cb9ee14d43b5fe4e2691e9d17db846a",
".git/objects/fc/2c0830b46e4ff93382cdc45db95070b8ed169b": "77bca3d9a9396609a5ea161152d0ce78",
".git/objects/fc/e73b6cb6c59b78ab388d7a63f11b0c0d2ff02b": "fe53e644d49e7753732ab8b13217dc15",
".git/objects/fe/bfe5dd88334d63d93630ae88f3cd647a67b7c4": "0c8f14ccb6c721a29fe4e70541d1b22a",
".git/objects/ff/331a619201f75311ad290751aba2b7dded682f": "4b45ff6b7a77e41d6033b98846e646cc",
".git/objects/ff/81c2669e93635e2b65dee2cbbdabc904dbb1e4": "082906e06fc132d7de2d3143800389eb",
".git/objects/pack/tmp_pack_xfv8FZ": "0385af4d94def0b08efd6e2d1e00e4d1",
".git/refs/heads/main": "cad6dcfe62344169554b72026ab56aa0",
".git/refs/remotes/origin/main": "cad6dcfe62344169554b72026ab56aa0",
"assets/AssetManifest.bin": "9d10d635bdd277e96fb78e124665c057",
"assets/AssetManifest.bin.json": "57b2167869305d1ab6b182bd889111b7",
"assets/AssetManifest.json": "09b7429ae2242e4f1a710f572f0206fb",
"assets/assets/fonts/Londrina_Solid/LondrinaSolid-Black.ttf": "1c1fcee33871200c6cc86380fff37438",
"assets/assets/fonts/Londrina_Solid/LondrinaSolid-Regular.ttf": "0e0c966ac6cad3afcfd672c96197f360",
"assets/assets/fonts/Londrina_Solid/LondrinaSolid-Thin.ttf": "960787d4314244b3a8a3afb65bd1fa39",
"assets/assets/fonts/lora/Lora-Bold.ttf": "3487bb1d17bf46e79cb03d5d98b962a9",
"assets/assets/fonts/lora/Lora-Medium.ttf": "a8a699f8c3bbbd35bc321a79d618b078",
"assets/assets/fonts/lora/Lora-Regular.ttf": "29149bc88d3600b6a10d0b23790da014",
"assets/assets/icones/burnin_trees_en.png": "35e399d24ef08775f5c0938434008234",
"assets/assets/icones/burnin_trees_ja.png": "3ad012e92392e02cb3e58988c2205edb",
"assets/assets/icones/burnin_trees_pt.png": "6af68a8cc8c32ecd9ecfca923f8dff12",
"assets/assets/icones/dealing_with_trash_en.png": "d3581f9da8544197934e6e7cca922224",
"assets/assets/icones/dealing_with_trash_ja.png": "fb46b91ee3aec06b29698348bf449c2b",
"assets/assets/icones/dealing_with_trash_pt.png": "0123009b5a2dfdce44f6bd5f24e0851e",
"assets/assets/icones/desertification_iona_en.png": "bf37603ee7c286b42ec3c5ff76fae343",
"assets/assets/icones/desertification_iona_ja.png": "5ab1521441c5befb41115caf8aa9bc6f",
"assets/assets/icones/desertification_iona_pt.png": "3adbcfd2724efe9e7492afcaa0eb8e25",
"assets/assets/icones/donate.png": "4ea200cf0699d538c1dbfef097f55668",
"assets/assets/icones/game_hints.png": "edf216afcc13789577fbd30419709677",
"assets/assets/icones/game_hints_en.png": "5e524e6d8e515d9aab074e37569b0911",
"assets/assets/icones/game_hints_ja.png": "2313177aab5a7cdd02495637f6a3296b",
"assets/assets/icones/game_hints_pt.png": "d0a4df817958272d77210d172092bfa2",
"assets/assets/icones/handshakecare.png": "bc98c6512158e8763d0b5b660e778dcc",
"assets/assets/icones/hint.png": "0dac74e220424d1e025173dd734bfb42",
"assets/assets/icones/language_logo.png": "c9dd6b49e9f1f2384612564c1e51093b",
"assets/assets/icones/logo_game.png": "59f4e471504c495b6ca2154589f8c610",
"assets/assets/icones/natureza.png": "a08f211170ff2ea637da80069630d6c5",
"assets/assets/icones/parque.png": "dc2d3946b07d67f4c28db12f42ae35a5",
"assets/assets/icones/pause.png": "a49277556386b98a338a27cd6a5a96d6",
"assets/assets/icones/scores_game.png": "b17fb7ccbdb19fbb7c6a0c956875eb49",
"assets/assets/icones/shop.png": "ff6f060eee4b23d214f2b9a123e4276a",
"assets/assets/icones/store.png": "2d90231592757b3b5a854dfa4ec91041",
"assets/assets/icones/trash-can.png": "39322c69319af309fd34e6624ccc6941",
"assets/assets/icones/trash_can.png": "19efce4387533af7cf21615367b1b3cc",
"assets/assets/icones/tree.png": "90c2788ce6e256091f00d9c4808480a5",
"assets/assets/icones/tree_collecter.png": "427570fdeebee9509661e7ccad472d56",
"assets/assets/images/atack_effect_bottom.png": "e2406062be291971a034123fdd1757f9",
"assets/assets/images/atack_effect_left.png": "5b5475da758d76f79c34429f70f7f6af",
"assets/assets/images/atack_effect_right.png": "39b3d8583205c90284cd60f0e018f29d",
"assets/assets/images/atack_effect_top.png": "7b01845d595c3803a07567ee87710658",
"assets/assets/images/BaetoriceSprite.png": "1ba08d492172bacf088c3b7907777e2c",
"assets/assets/images/base_out_atlas.png": "dce08605d775c8dc0d3d275297f76e01",
"assets/assets/images/burning_trees.png": "f0a1bf155dd238174e1d75bb2efec153",
"assets/assets/images/capitain_chicken.png": "402c4e3415a4368edc8650e2cac37a0d",
"assets/assets/images/cow.png": "f36bdd8eaab328cf232ef1140f505de8",
"assets/assets/images/d8c5q6o-3a7230e6-c46e-4986-9962-8fb1e10347a5.png": "75ecfc1dda0f715387fd5ae2e9c4d3e7",
"assets/assets/images/desertification.png": "5ac204ab126f0ff6bdc1a31aa31d40cc",
"assets/assets/images/dirt-tiles.png": "c0a0686404d83afb9531a6713ec12ac4",
"assets/assets/images/fHero_.png": "afabbe03f1ea6884410803ef3732e6c2",
"assets/assets/images/ghost_.png": "9ced83a942a111723fdf2e6b5b4a732a",
"assets/assets/images/green%2520trees.png": "3a308b8422e18878c74dbed2f9bc4f0d",
"assets/assets/images/green_trees.png": "3a308b8422e18878c74dbed2f9bc4f0d",
"assets/assets/images/Grupo%252023.png": "12e30ac5dca05fdf2df08e69c91d884f",
"assets/assets/images/Grupo%252024.png": "b67079fb2035dd949709526c34ef0418",
"assets/assets/images/Grupo-23.png": "76385db5a8649445a61adb1b2458a3c0",
"assets/assets/images/hobgoblin_.png": "7c78c7b4f7f1b29af5c096d475412238",
"assets/assets/images/icone.png": "0fad81edeb659bc83dd082d5439a9abf",
"assets/assets/images/knight_.png": "5a6aeea7ab7f38aadf408e947f08d16e",
"assets/assets/images/language/japan_flag.png": "60ddedcc153d70141878a2f634f539e5",
"assets/assets/images/language/japao.png": "2ce2034d53da143146beff29ed10a5b9",
"assets/assets/images/language/portugal.png": "aae7a61d3a203f112a29e8774a92f2f2",
"assets/assets/images/language/portugal_flag.png": "0e07d63572a827288080eb4f2998f52e",
"assets/assets/images/language/reino-unido.png": "e667999048e9c8c5c5610d1d33908e52",
"assets/assets/images/language/uk_flag.png": "e667999048e9c8c5c5610d1d33908e52",
"assets/assets/images/map/arvores.json": "78466e0c7965f4d8d8e6d2de4383b544",
"assets/assets/images/map/base_out_atlas.json": "75825282e9e51d8c22acc80bc590cc10",
"assets/assets/images/map/casas.json": "b281002b91ce77a519fc20bd604049f5",
"assets/assets/images/map/farm.png": "4359c6bb27653490d1ac2ba963fa82a6",
"assets/assets/images/map/farm_plants/corn.png": "a10b4b2e99d29c1edc6e65a15c643e9b",
"assets/assets/images/map/farm_plants/corn_plant.png": "269049f183f18638cd0479479cb0739a",
"assets/assets/images/map/farm_plants/pepper.png": "bf67c4a8342e049d7c89b36bc190464e",
"assets/assets/images/map/farm_plants/pepper_plant.png": "4bfe5a689f453f004eb65b6fe2d2be7e",
"assets/assets/images/map/farm_plants/tomato.png": "9373be7f89f6c639338def6a91ce3d36",
"assets/assets/images/map/farm_plants/tomato_plant.png": "79bbf592033cc41ba79185c646e53da1",
"assets/assets/images/map/Grupo_24.json": "68d1b73e768dd206f2b4f558abc00a5d",
"assets/assets/images/map/houses.json": "ec9448966ac3c1e885d01163719df970",
"assets/assets/images/map/iona_village.json": "e22ddec416697231810dab16a31f7f4d",
"assets/assets/images/map/mundo.json": "c979a3ff64fdedc2fab960cef76db698",
"assets/assets/images/map/PathAndObjects.json": "ade6025546270bfa1c8a15ba1b8627c0",
"assets/assets/images/map/polution_area_icone.png": "733f2a827b41aca433d8a1bdb38d5fef",
"assets/assets/images/map/recycle_items.json": "0b8974d40d90824952849a0665a7173d",
"assets/assets/images/map/recyclItems.png": "ad21b49ad5693ce8ffc98cd73e596ecc",
"assets/assets/images/map/stemtree.png": "892461605caf8643c10c908006b94845",
"assets/assets/images/map/terrain_atlas.json": "db1d6108fa1ad3dd614441833528b1f6",
"assets/assets/images/map/texture.json": "d1f10bca541bcb501c0638b5f75f30ad",
"assets/assets/images/map/tileset_other.json": "086a12881a70c97155f55db5e70663ba",
"assets/assets/images/map/trashimages/trash%2520assets.zip": "07420c70201c694b59d7b54d47b35cc7",
"assets/assets/images/map/trashimages/trash01.png": "7dd360db2a36c344f5d0ee22582eb894",
"assets/assets/images/map/trashimages/trash02.png": "bc97637be61b37d36b5957a487159a59",
"assets/assets/images/map/trashimages/trash03.png": "1f6f628fc50443ee2fdd4d6437bca19c",
"assets/assets/images/map/trashimages/trash04.png": "563de0b52e08fe0f92088c34566bdab6",
"assets/assets/images/map/trashimages/trash05.png": "087dcb08ff6144548abf007f16fae127",
"assets/assets/images/map/trashimages/trash06.png": "fcfc32fa31bc11b479b69cc5e79415cc",
"assets/assets/images/map/trashimages/trash07.png": "e51b6e77a4024fefbe6a2f796090493d",
"assets/assets/images/map/trashimages/trash08.png": "4d6be61956b7a6f29b79a70873897ac8",
"assets/assets/images/map/trashimages/trash09.png": "543d4f06c9136181478f70a2dc9f7a51",
"assets/assets/images/map/trashimages/trash10.png": "570ea02275b6c50c5d36e376f4cc2d65",
"assets/assets/images/map/trashimages/trash11.png": "1bc5f80eab67c57d48a71387ab5461ae",
"assets/assets/images/map/trashimages/trash12.png": "09a4869feacc9bfe0da8fa454c1afca0",
"assets/assets/images/map/trashimages/trash13.png": "55baabc50adcbed8e2659e83f1ac7bcd",
"assets/assets/images/map/trashimages/trash14.png": "b11175531656adc3cf9154ff44f9e214",
"assets/assets/images/map/trashimages/trash15.png": "df0f77f6becb60e967458cca88f914c3",
"assets/assets/images/map/trashimages/trash16.png": "455c0d84f478077b32250ddff322a622",
"assets/assets/images/map/trashimages/trash17.png": "42fc5613ff835a435a09f47855a93765",
"assets/assets/images/map/trashimages/trash18.png": "116a7e26101fb31865462cd215ad1e71",
"assets/assets/images/map/trashimages/trash19.png": "eff52768d16b3809c553cc05db73e729",
"assets/assets/images/map/trashimages/trash20.png": "29e1f9cde6bc3702db62a0eb810328f7",
"assets/assets/images/map/trashimages/trash21.png": "94ab2c54a3c4413bbcbf44b40b7e62ac",
"assets/assets/images/map/trashimages/trash22.png": "016236704a91267d592045a5631fc38b",
"assets/assets/images/necromancer_.png": "1195adfe6386902d6450d0cdff9b5405",
"assets/assets/images/ngolap.png": "68ab4f2f907b1a97abe35e3c906df14c",
"assets/assets/images/npcs.png": "e19fa7bd123e938fb67e5ed47a276801",
"assets/assets/images/PathAndObjects.png": "4f081f8db4ce99a4a376762bee7af3e9",
"assets/assets/images/plastic.png": "1d06f2cb6999715b202b54a307441641",
"assets/assets/images/player/knight_die.png": "8e55febc1e2563a9d7ba4b48625ba88d",
"assets/assets/images/player/knight_idle_left.png": "e4ddca181210b0cf9555331aaf2af512",
"assets/assets/images/player/knight_idle_right.png": "191737282656dd3c8851a2dd3dfc1c0c",
"assets/assets/images/player/knight_run_left.png": "ce9f3ad71135b459f6b66c892b5b9e30",
"assets/assets/images/player/knight_run_right.png": "9cac5c91f943ba81915573bd93060d4d",
"assets/assets/images/sheep_animal.png": "63205f65bf4b9eb58524a1971eea1554",
"assets/assets/images/terrain_atlas.png": "4359c6bb27653490d1ac2ba963fa82a6",
"assets/assets/images/texture.png": "78b16e05519e28a637ce8b6439a542ae",
"assets/assets/images/tilee4.png": "6cb5b360295d05b61ee8d446b776f885",
"assets/assets/images/tileset_other.png": "833e897f57679e38c648eddb26d216d8",
"assets/assets/images/trees.png": "9f92fc4cac8c2a5635869a31857e52ad",
"assets/assets/images/tregreen.png": "129a2c787738fdf45659c8a4e0021f51",
"assets/assets/images/warlock_.png": "d5b638cdad09a168645a0c13852d3175",
"assets/assets/images/Winter%2520Birds.png": "bf8ed60c97fa9122701d104de40ca80b",
"assets/assets/logo_game.png": "bbfc44c05e087e3a3b7d9bbb43dadac0",
"assets/assets/menupagegame.png": "ade4a2da88227b5d6ceef197de199047",
"assets/assets/menupagegame_horizontal.png": "605cb812efe43dc504518382aa8335d8",
"assets/assets/menupagegame_horizontal2.png": "af5bebe69a98f75a65be399cccb0ac65",
"assets/assets/menupagegame_horizontal3.png": "370faaa62c854207a29bf9992ec4cb2c",
"assets/assets/menupagegame_windows.png": "a8939a57a77b65e9df3f9f402d493527",
"assets/assets/splachscreengame.png": "108287234dfc9269aeaf7b3e6bab8301",
"assets/assets/splachscreengame_windows.png": "79c841f28eddbfb99c1f8ffe4bc384d1",
"assets/assets/splach_screen_orzontal.png": "1a754ee9b549441b19fbad6a7f5834cc",
"assets/assets/splach_screen_orzontal_writen.png": "d8df6818e3b21904a32032528f31a6d9",
"assets/FontManifest.json": "03a72e8e19f43e3f58d0e1ca56019073",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "926d406bc23e00f5f01a3b5a0a23a14d",
"assets/packages/add_to_google_wallet/assets/svg/buttons/ar_add_to_google_wallet_wallet-button.svg": "8ed2b5dc8ea42390bc1f22f9814954b0",
"assets/packages/add_to_google_wallet/assets/svg/buttons/az_add_to_google_wallet_wallet-button.svg": "1c545af772b2f9b1e50b23b63c9f98da",
"assets/packages/add_to_google_wallet/assets/svg/buttons/bg_add_to_google_wallet_wallet-button.svg": "fb36a9dd4688eabe5e9e50b029564227",
"assets/packages/add_to_google_wallet/assets/svg/buttons/br_add_to_google_wallet_wallet-button.svg": "d711b404a7d3b86f3cc5c8acedc50dbd",
"assets/packages/add_to_google_wallet/assets/svg/buttons/bs_add_to_google_wallet_wallet-button.svg": "6aa017fb69dfc3cf76058285e1d630d8",
"assets/packages/add_to_google_wallet/assets/svg/buttons/by_add_to_google_wallet_wallet-button.svg": "fc717a3f3da30fe862a310d643fe92ad",
"assets/packages/add_to_google_wallet/assets/svg/buttons/ca_add_to_google_wallet_wallet-button.svg": "0a4925620a47363661cb7a51b4ab5a58",
"assets/packages/add_to_google_wallet/assets/svg/buttons/cz_add_to_google_wallet_wallet-button.svg": "f3f2178af2bc4cdf103826cd98c9369b",
"assets/packages/add_to_google_wallet/assets/svg/buttons/de_add_to_google_wallet_wallet-button.svg": "bfb158c4b084482543e8ef901df02d21",
"assets/packages/add_to_google_wallet/assets/svg/buttons/dk_add_to_google_wallet_wallet-button.svg": "60d5092f469e20135016aaf3cc5d213b",
"assets/packages/add_to_google_wallet/assets/svg/buttons/enAU_add_to_google_wallet_wallet-button.svg": "c283cb0dc517d3bc6de2590b3bac2fcf",
"assets/packages/add_to_google_wallet/assets/svg/buttons/enCA_add_to_google_wallet_wallet-button.svg": "c283cb0dc517d3bc6de2590b3bac2fcf",
"assets/packages/add_to_google_wallet/assets/svg/buttons/enGB_add_to_google_wallet_wallet-button.svg": "c283cb0dc517d3bc6de2590b3bac2fcf",
"assets/packages/add_to_google_wallet/assets/svg/buttons/enIN_add_to_google_wallet_wallet-button.svg": "c283cb0dc517d3bc6de2590b3bac2fcf",
"assets/packages/add_to_google_wallet/assets/svg/buttons/enSG_add_to_google_wallet_wallet-button.svg": "568708442552f3b3caaf6161f4868d72",
"assets/packages/add_to_google_wallet/assets/svg/buttons/enUS_add_to_google_wallet_wallet-button.svg": "c283cb0dc517d3bc6de2590b3bac2fcf",
"assets/packages/add_to_google_wallet/assets/svg/buttons/enZA_add_to_google_wallet_wallet-button.svg": "c283cb0dc517d3bc6de2590b3bac2fcf",
"assets/packages/add_to_google_wallet/assets/svg/buttons/es419_add_to_google_wallet_wallet-button.svg": "cb9db60b0742150ae3ab547e4f4ef0e6",
"assets/packages/add_to_google_wallet/assets/svg/buttons/esES_add_to_google_wallet_wallet-button.svg": "5946c137c2cb5015d3bb2d2b89bbfa2f",
"assets/packages/add_to_google_wallet/assets/svg/buttons/esUS_add_to_google_wallet_wallet-button.svg": "cb9db60b0742150ae3ab547e4f4ef0e6",
"assets/packages/add_to_google_wallet/assets/svg/buttons/et_add_to_google_wallet_wallet-button.svg": "c0b6fbcba5ea9e222d49da62d55c1f07",
"assets/packages/add_to_google_wallet/assets/svg/buttons/fl_add_to_google_wallet_wallet-button.svg": "d5141c1d2fa7c71f6d3f8024e60980a4",
"assets/packages/add_to_google_wallet/assets/svg/buttons/fp_add_to_google_wallet_wallet-button.svg": "23b16942ca07f225da0d4ff044825213",
"assets/packages/add_to_google_wallet/assets/svg/buttons/frCA_add_to_google_wallet_wallet-button.svg": "bc2f47f5f3b8f8f3253770fc89a540c7",
"assets/packages/add_to_google_wallet/assets/svg/buttons/frFR_add_to_google_wallet_wallet-button.svg": "bc2f47f5f3b8f8f3253770fc89a540c7",
"assets/packages/add_to_google_wallet/assets/svg/buttons/gr_add_to_google_wallet_wallet-button.svg": "64c855f01d129b8d71ceeea8ed2a3d71",
"assets/packages/add_to_google_wallet/assets/svg/buttons/he_add_to_google_wallet_wallet-button.svg": "a9a052a290a19f712a6685bbcd190ca0",
"assets/packages/add_to_google_wallet/assets/svg/buttons/hr_add_to_google_wallet_wallet-button.svg": "b6d10a9fbd63b345fc2825b1e4a3abf0",
"assets/packages/add_to_google_wallet/assets/svg/buttons/hu_add_to_google_wallet_wallet-button.svg": "e534db0e513768092bc4c2b6b4e3beea",
"assets/packages/add_to_google_wallet/assets/svg/buttons/hy_add_to_google_wallet_wallet-button.svg": "86474c2f3e14d467e45a8b9c2b81402b",
"assets/packages/add_to_google_wallet/assets/svg/buttons/id_add_to_google_wallet_wallet-button.svg": "7139c1614230fce1ea41c7f9cadda52f",
"assets/packages/add_to_google_wallet/assets/svg/buttons/is_add_to_google_wallet_wallet-button.svg": "cb03001a5ab3d58ebbfa3d6472aa4a23",
"assets/packages/add_to_google_wallet/assets/svg/buttons/it_add_to_google_wallet_wallet-button.svg": "fbdc320908b10990db14acc6f433ac7c",
"assets/packages/add_to_google_wallet/assets/svg/buttons/jp_add_to_google_wallet_wallet-button.svg": "d139a2176756c1b0ccf9c033450d4473",
"assets/packages/add_to_google_wallet/assets/svg/buttons/ka_add_to_google_wallet_wallet-button.svg": "be97561ee61811a8ac3dc8128b5301e8",
"assets/packages/add_to_google_wallet/assets/svg/buttons/kk_add_to_google_wallet_wallet-button.svg": "cecbc3f3d7973d388b088294b1ea265a",
"assets/packages/add_to_google_wallet/assets/svg/buttons/ky_add_to_google_wallet_wallet-button.svg": "157b7963b74a17c4bfd5de0db482b399",
"assets/packages/add_to_google_wallet/assets/svg/buttons/lt_add_to_google_wallet_wallet-button.svg": "cb8ba3e609a1b57f225f05eaddcb8e19",
"assets/packages/add_to_google_wallet/assets/svg/buttons/lv_add_to_google_wallet_wallet-button.svg": "943d879ec5f1533769d3bc60e849d213",
"assets/packages/add_to_google_wallet/assets/svg/buttons/mk_add_to_google_wallet_wallet-button.svg": "ec59cda1b4b0569349d5b04b5fecb177",
"assets/packages/add_to_google_wallet/assets/svg/buttons/my_add_to_google_wallet_wallet-button.svg": "04157e592054aabc39fd2215792baaea",
"assets/packages/add_to_google_wallet/assets/svg/buttons/nl_add_to_google_wallet_wallet-button.svg": "efaee620d9c06b1fd5181f2b2395a3d1",
"assets/packages/add_to_google_wallet/assets/svg/buttons/no_add_to_google_wallet_wallet-button.svg": "87eac0605cbb7056f2e32e270da14d07",
"assets/packages/add_to_google_wallet/assets/svg/buttons/pl_add_to_google_wallet_wallet-button.svg": "72e75b2a37a77648f882878b4512952b",
"assets/packages/add_to_google_wallet/assets/svg/buttons/pt_add_to_google_wallet_wallet-button.svg": "d711b404a7d3b86f3cc5c8acedc50dbd",
"assets/packages/add_to_google_wallet/assets/svg/buttons/ro_add_to_google_wallet_wallet-button.svg": "406323ed5b974f0f67fa516f7653bde0",
"assets/packages/add_to_google_wallet/assets/svg/buttons/ru_add_to_google_wallet_wallet-button.svg": "fc717a3f3da30fe862a310d643fe92ad",
"assets/packages/add_to_google_wallet/assets/svg/buttons/se_add_to_google_wallet_wallet-button.svg": "4f87e7ee56c9aeddf475f1a4c6abd375",
"assets/packages/add_to_google_wallet/assets/svg/buttons/sk_add_to_google_wallet_wallet-button.svg": "b16f6ed9494595a14ade427d4db1b0b1",
"assets/packages/add_to_google_wallet/assets/svg/buttons/sl_add_to_google_wallet_wallet-button.svg": "f89a88aa0b6dfb367c74c621bda15ffd",
"assets/packages/add_to_google_wallet/assets/svg/buttons/sq_add_to_google_wallet_wallet-button.svg": "e568f2f0545c2993b412f7f5b42320ec",
"assets/packages/add_to_google_wallet/assets/svg/buttons/sr_add_to_google_wallet_wallet-button.svg": "fda80812ddb5b99cf767ed19a6ceefea",
"assets/packages/add_to_google_wallet/assets/svg/buttons/th_add_to_google_wallet_wallet-button.svg": "ab9c343ba68db03201e572a234cb5412",
"assets/packages/add_to_google_wallet/assets/svg/buttons/tr_add_to_google_wallet_wallet-button.svg": "f1b61f991a8ab72fe7833d054aab7e97",
"assets/packages/add_to_google_wallet/assets/svg/buttons/uk_add_to_google_wallet_wallet-button.svg": "6835dbf7541d926e3d9367fd67c703d4",
"assets/packages/add_to_google_wallet/assets/svg/buttons/uz_add_to_google_wallet_wallet-button.svg": "9426afa0cd9540106ef93fd46a1fd217",
"assets/packages/add_to_google_wallet/assets/svg/buttons/vi_add_to_google_wallet_wallet-button.svg": "35162663f63d206ae1e2cc30be7cfffc",
"assets/packages/add_to_google_wallet/assets/svg/buttons/zhHK_add_to_google_wallet_wallet-button.svg": "147b0913cc5f029978e33006dcbdee13",
"assets/packages/add_to_google_wallet/assets/svg/buttons/zhTW_add_to_google_wallet_wallet-button.svg": "147b0913cc5f029978e33006dcbdee13",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "29fd96fc28413a56a018f1666dfb66a7",
"/": "29fd96fc28413a56a018f1666dfb66a7",
"main.dart.js": "e2fd8882b2b6e5bd3d471d4e4d429813",
"manifest.json": "ad5bba9f0f7b4783f7ed34eb93335623",
"version.json": "0a2476b4587012e592d5c400e3dced8b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
