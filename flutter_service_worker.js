'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9d10d635bdd277e96fb78e124665c057",
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
"index.html": "b48df8f3af130fa01e67c213cdfe0efc",
"/": "b48df8f3af130fa01e67c213cdfe0efc",
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
