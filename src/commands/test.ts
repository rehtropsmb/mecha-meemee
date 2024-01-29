import { Interaction } from 'discord.js';
import {
    Command,
    DiscordArgs,
    TwitchArgs,
} from '../interfaces/command.interface';

const aliases = ['test'];



const discordExecute = (discordArgs: DiscordArgs) => {
    let total = 0;
    for (const cat in records) {
        const arr = records[cat];
        for (const level of arr) {
            if (level.record) {
                total += level.record;
            }
        }
    }
    discordArgs.message.reply(`Community Total: ${total}`);
};


const records = {
    "beginner": [
        {
            "level": {
                "name": "beginner_1_-_simple",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 6,
                    "username": "Blendra"
                }
            ],
            "record": 10830
        },
        {
            "level": {
                "name": "beginner_2_-_hollow",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 6,
                    "username": "Blendra"
                }
            ],
            "record": 11770
        },
        {
            "level": {
                "name": "beginner_3_-_bumpy",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                }
            ],
            "record": 12480
        },
        {
            "level": {
                "name": "beginner_4_-_switches",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 6,
                    "username": "Blendra"
                }
            ],
            "record": 30846
        },
        {
            "level": {
                "name": "beginner_5_-_bowl",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                }
            ],
            "record": 13050
        },
        {
            "level": {
                "name": "beginner_6_-_floaters",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                }
            ],
            "record": 12390
        },
        {
            "level": {
                "name": "beginner_7_-_slopes",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 3,
                    "username": "Silverboxer"
                }
            ],
            "record": 10872
        },
        {
            "level": {
                "name": "beginner_8_-_sliders",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 42,
                    "username": "42guy42"
                }
            ],
            "record": 10650
        },
        {
            "level": {
                "name": "beginner_9_-_spinning_top",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                }
            ],
            "record": 11770
        },
        {
            "level": {
                "name": "beginner_10_-_curve_bridge",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                }
            ],
            "record": 7730
        }
    ],
    "beginner_extra": [
        {
            "level": {
                "name": "beginner_extra_1_-_conveyers",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                }
            ],
            "record": 11116
        },
        {
            "level": {
                "name": "beginner_extra_2_-_bumpy_check",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                }
            ],
            "record": 11032
        },
        {
            "level": {
                "name": "beginner_extra_3_-_alternative",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                },
                {
                    "country": "MX",
                    "id": 11,
                    "username": "Hannes"
                }
            ],
            "record": 10896
        },
        {
            "level": {
                "name": "beginner_extra_4_-_junction",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                }
            ],
            "record": 32580
        },
        {
            "level": {
                "name": "beginner_extra_5_-_bead_screen",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                }
            ],
            "record": 11132
        },
        {
            "level": {
                "name": "beginner_extra_6_-_fluctuation",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 37,
                    "username": "monkeysmb"
                }
            ],
            "record": 12610
        },
        {
            "level": {
                "name": "beginner_extra_7_-_folders",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                },
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                },
                {
                    "country": "MX",
                    "id": 11,
                    "username": "Hannes"
                },
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                }
            ],
            "record": 10760
        },
        {
            "level": {
                "name": "beginner_extra_8_-_quick_turn",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": null,
                    "id": 59,
                    "username": "Pintobean120"
                },
                {
                    "country": null,
                    "id": 90,
                    "username": "SilverEevee493"
                },
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                },
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                },
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                },
                {
                    "country": null,
                    "id": 21,
                    "username": "Alist"
                },
                {
                    "country": "US",
                    "id": 37,
                    "username": "monkeysmb"
                },
                {
                    "country": "US",
                    "id": 10,
                    "username": "IkeSMB"
                }
            ],
            "record": 11306
        },
        {
            "level": {
                "name": "beginner_extra_9_-_linear_seesaws",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                },
                {
                    "country": "CA",
                    "id": 42,
                    "username": "42guy42"
                }
            ],
            "record": 10730
        },
        {
            "level": {
                "name": "beginner_extra_10_-_birth",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                }
            ],
            "record": 10656
        }
    ],
    "advanced": [
        {
            "level": {
                "name": "advanced_1_-_banks",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                }
            ],
            "record": 10932
        },
        {
            "level": {
                "name": "advanced_2_-_eaten_floor",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                }
            ],
            "record": 10806
        },
        {
            "level": {
                "name": "advanced_3_-_hoppers",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                }
            ],
            "record": 10976
        },
        {
            "level": {
                "name": "advanced_4_-_coaster",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                },
                {
                    "country": null,
                    "id": 59,
                    "username": "Pintobean120"
                },
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                },
                {
                    "country": "MX",
                    "id": 11,
                    "username": "Hannes"
                }
            ],
            "record": 15892
        },
        {
            "level": {
                "name": "advanced_5_-_board_park",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 37,
                    "username": "monkeysmb"
                }
            ],
            "record": 13532
        },
        {
            "level": {
                "name": "advanced_6_-_swell",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                },
                {
                    "country": "CA",
                    "id": 42,
                    "username": "42guy42"
                }
            ],
            "record": 12386
        },
        {
            "level": {
                "name": "advanced_7_-_gravity_slider",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                }
            ],
            "record": 14272
        },
        {
            "level": {
                "name": "advanced_8_-_inchworms",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": null,
                    "id": 19,
                    "username": "Claris"
                },
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                },
                {
                    "country": null,
                    "id": 2,
                    "username": "magicboy10xx"
                },
                {
                    "country": null,
                    "id": 59,
                    "username": "Pintobean120"
                },
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                },
                {
                    "country": "US",
                    "id": 6,
                    "username": "Blendra"
                },
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                },
                {
                    "country": null,
                    "id": 21,
                    "username": "Alist"
                },
                {
                    "country": "US",
                    "id": 37,
                    "username": "monkeysmb"
                },
                {
                    "country": "MX",
                    "id": 11,
                    "username": "Hannes"
                }
            ],
            "record": 51220
        },
        {
            "level": {
                "name": "advanced_9_-_totalitarianism",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                }
            ],
            "record": 10900
        },
        {
            "level": {
                "name": "advanced_10_-_leveler",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                }
            ],
            "record": 11200
        },
        {
            "level": {
                "name": "advanced_11_-_organic_form",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": null,
                    "id": 17,
                    "username": "Gonquai"
                }
            ],
            "record": 10672
        },
        {
            "level": {
                "name": "advanced_12_-_reversible_gear",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                }
            ],
            "record": 14342
        },
        {
            "level": {
                "name": "advanced_13_-_stepping_stones",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                }
            ],
            "record": 11360
        },
        {
            "level": {
                "name": "advanced_14_-_dribbles",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                }
            ],
            "record": 10830
        },
        {
            "level": {
                "name": "advanced_15_-_u.r.l.",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 3,
                    "username": "Silverboxer"
                }
            ],
            "record": 11286
        },
        {
            "level": {
                "name": "advanced_16_-_mad_rings",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                }
            ],
            "record": 57570
        },
        {
            "level": {
                "name": "advanced_17_-_curvy_options",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                }
            ],
            "record": 12632
        },
        {
            "level": {
                "name": "advanced_18_-_twister",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": null,
                    "id": 59,
                    "username": "Pintobean120"
                }
            ],
            "record": 10872
        },
        {
            "level": {
                "name": "advanced_19_-_downhill",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": null,
                    "id": 59,
                    "username": "Pintobean120"
                },
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                }
            ],
            "record": 11342
        },
        {
            "level": {
                "name": "advanced_20_-_rampage",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                }
            ],
            "record": 12850
        },
        {
            "level": {
                "name": "advanced_21_-_pro_skaters",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                }
            ],
            "record": 34332
        },
        {
            "level": {
                "name": "advanced_22_-_giant_comb",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                }
            ],
            "record": 11760
        },
        {
            "level": {
                "name": "advanced_23_-_beehive",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 6,
                    "username": "Blendra"
                }
            ],
            "record": 13352
        },
        {
            "level": {
                "name": "advanced_24_-_dynamic_maze",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                }
            ],
            "record": 11006
        },
        {
            "level": {
                "name": "advanced_25_-_triangle_holes",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                },
                {
                    "country": "CA",
                    "id": 42,
                    "username": "42guy42"
                }
            ],
            "record": 10792
        },
        {
            "level": {
                "name": "advanced_26_-_launchers",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                },
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                },
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                },
                {
                    "country": null,
                    "id": 59,
                    "username": "Pintobean120"
                },
                {
                    "country": "US",
                    "id": 37,
                    "username": "monkeysmb"
                }
            ],
            "record": 31136
        },
        {
            "level": {
                "name": "advanced_27_-_randomizer",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": null,
                    "id": 59,
                    "username": "Pintobean120"
                }
            ],
            "record": 56142
        },
        {
            "level": {
                "name": "advanced_28_-_coin_slots",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                },
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                },
                {
                    "country": "MX",
                    "id": 11,
                    "username": "Hannes"
                }
            ],
            "record": 30960
        },
        {
            "level": {
                "name": "advanced_29_-_seesaw_bridges",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                }
            ],
            "record": 8670
        },
        {
            "level": {
                "name": "advanced_30_-_arthropod",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                }
            ],
            "record": 11000
        }
    ],
    "advanced_extra": [
        {
            "level": {
                "name": "advanced_extra_1_-_auto_doors",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": null,
                    "id": 59,
                    "username": "Pintobean120"
                }
            ],
            "record": 8916
        },
        {
            "level": {
                "name": "advanced_extra_2_-_heavy_sphere",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 42,
                    "username": "42guy42"
                }
            ],
            "record": 10852
        },
        {
            "level": {
                "name": "advanced_extra_3_-_stagger",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                }
            ],
            "record": 10506
        },
        {
            "level": {
                "name": "advanced_extra_4_-_u.f.o.",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                }
            ],
            "record": 10942
        },
        {
            "level": {
                "name": "advanced_extra_5_-_ring_bridges",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                }
            ],
            "record": 10972
        },
        {
            "level": {
                "name": "advanced_extra_6_-_domes",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                }
            ],
            "record": 11890
        },
        {
            "level": {
                "name": "advanced_extra_7_-_amida_lot",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                },
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                }
            ],
            "record": 11376
        },
        {
            "level": {
                "name": "advanced_extra_8_-_long_slider",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                },
                {
                    "country": null,
                    "id": 59,
                    "username": "Pintobean120"
                },
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                },
                {
                    "country": "US",
                    "id": 49,
                    "username": "Frikkinfriks14"
                },
                {
                    "country": "US",
                    "id": 37,
                    "username": "monkeysmb"
                }
            ],
            "record": 11846
        },
        {
            "level": {
                "name": "advanced_extra_9_-_grid_bridge",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                },
                {
                    "country": "US",
                    "id": 3,
                    "username": "Silverboxer"
                }
            ],
            "record": 11300
        },
        {
            "level": {
                "name": "advanced_extra_10_-_teapot",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                },
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                }
            ],
            "record": 6872
        }
    ],
    "expert": [
        {
            "level": {
                "name": "expert_1_-_wormhole",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                }
            ],
            "record": 11282
        },
        {
            "level": {
                "name": "expert_2_-_free_fall",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                },
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                },
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                }
            ],
            "record": 32036
        },
        {
            "level": {
                "name": "expert_3_-_melting_pot",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                },
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                }
            ],
            "record": 6012
        },
        {
            "level": {
                "name": "expert_4_-_mad_shuffle",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                }
            ],
            "record": 11700
        },
        {
            "level": {
                "name": "expert_5_-_partition",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                }
            ],
            "record": 11932
        },
        {
            "level": {
                "name": "expert_6_-_jump_machine",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 41,
                    "username": "Nambo"
                },
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                },
                {
                    "country": "US",
                    "id": 48,
                    "username": "Dmt_Goobz"
                }
            ],
            "record": 53296
        },
        {
            "level": {
                "name": "expert_7_-_zigzag_slope",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                }
            ],
            "record": 10030
        },
        {
            "level": {
                "name": "expert_8_-_tower",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                }
            ],
            "record": 10530
        },
        {
            "level": {
                "name": "expert_9_-_toggle",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": null,
                    "id": 91,
                    "username": "Xeno"
                },
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                },
                {
                    "country": "MX",
                    "id": 11,
                    "username": "Hannes"
                }
            ],
            "record": 12052
        },
        {
            "level": {
                "name": "expert_10_-_pachinko",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                }
            ],
            "record": 11696
        },
        {
            "level": {
                "name": "expert_11_-_combination",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                }
            ],
            "record": 11466
        },
        {
            "level": {
                "name": "expert_12_-_punched_seesaws",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                }
            ],
            "record": 33336
        },
        {
            "level": {
                "name": "expert_13_-_opera",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                }
            ],
            "record": 11676
        },
        {
            "level": {
                "name": "expert_14_-_brandished",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": null,
                    "id": 19,
                    "username": "Claris"
                },
                {
                    "country": null,
                    "id": 2,
                    "username": "magicboy10xx"
                },
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                },
                {
                    "country": "US",
                    "id": 3,
                    "username": "Silverboxer"
                },
                {
                    "country": "US",
                    "id": 36,
                    "username": "beard295"
                },
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                },
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                },
                {
                    "country": null,
                    "id": 17,
                    "username": "Gonquai"
                },
                {
                    "country": null,
                    "id": 9,
                    "username": "JamesFox"
                },
                {
                    "country": null,
                    "id": 92,
                    "username": "mrenomega"
                },
                {
                    "country": "US",
                    "id": 10,
                    "username": "IkeSMB"
                },
                {
                    "country": "US",
                    "id": 37,
                    "username": "monkeysmb"
                },
                {
                    "country": "US",
                    "id": 13,
                    "username": "ganon"
                },
                {
                    "country": "US",
                    "id": 47,
                    "username": "LogaSoba"
                },
                {
                    "country": null,
                    "id": 80,
                    "username": "Spyrosh"
                },
                {
                    "country": "CA",
                    "id": 42,
                    "username": "42guy42"
                }
            ],
            "record": 11430
        },
        {
            "level": {
                "name": "expert_15_-_tiers",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 37,
                    "username": "monkeysmb"
                }
            ],
            "record": 56560
        },
        {
            "level": {
                "name": "expert_16_-_cliffs",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                }
            ],
            "record": 11180
        },
        {
            "level": {
                "name": "expert_17_-_narrow_peaks",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                }
            ],
            "record": 15706
        },
        {
            "level": {
                "name": "expert_18_-_detour",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                }
            ],
            "record": 32546
        },
        {
            "level": {
                "name": "expert_19_-_switch_inferno",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                }
            ],
            "record": 10562
        },
        {
            "level": {
                "name": "expert_20_-_earthquake",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                },
                {
                    "country": "US",
                    "id": 37,
                    "username": "monkeysmb"
                }
            ],
            "record": 11712
        },
        {
            "level": {
                "name": "expert_21_-_spiral_bridge",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 37,
                    "username": "monkeysmb"
                }
            ],
            "record": 9936
        },
        {
            "level": {
                "name": "expert_22_-_wavy_option",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                }
            ],
            "record": 13750
        },
        {
            "level": {
                "name": "expert_23_-_obstacle",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                }
            ],
            "record": 11106
        },
        {
            "level": {
                "name": "expert_24_-_domino",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                }
            ],
            "record": 11342
        },
        {
            "level": {
                "name": "expert_25_-_sieve",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": null,
                    "id": 59,
                    "username": "Pintobean120"
                }
            ],
            "record": 10336
        },
        {
            "level": {
                "name": "expert_26_-_flock",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                }
            ],
            "record": 10580
        },
        {
            "level": {
                "name": "expert_27_-_double_spiral",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 37,
                    "username": "monkeysmb"
                }
            ],
            "record": 11150
        },
        {
            "level": {
                "name": "expert_28_-_hierarchy",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": null,
                    "id": 59,
                    "username": "Pintobean120"
                }
            ],
            "record": 11652
        },
        {
            "level": {
                "name": "expert_29_-_8_bracelets",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                }
            ],
            "record": 52162
        },
        {
            "level": {
                "name": "expert_30_-_banana_hunting",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 93,
                    "username": "wolf"
                },
                {
                    "country": null,
                    "id": 59,
                    "username": "Pintobean120"
                }
            ],
            "record": 11490
        },
        {
            "level": {
                "name": "expert_31_-_pistons",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                }
            ],
            "record": 12052
        },
        {
            "level": {
                "name": "expert_32_-_soft_cream",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "MX",
                    "id": 11,
                    "username": "Hannes"
                }
            ],
            "record": 11970
        },
        {
            "level": {
                "name": "expert_33_-_momentum",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                }
            ],
            "record": 12110
        },
        {
            "level": {
                "name": "expert_34_-_entangled_path",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": null,
                    "id": 2,
                    "username": "magicboy10xx"
                }
            ],
            "record": 31050
        },
        {
            "level": {
                "name": "expert_35_-_totters",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                },
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                },
                {
                    "country": "CA",
                    "id": 42,
                    "username": "42guy42"
                }
            ],
            "record": 12850
        },
        {
            "level": {
                "name": "expert_36_-_vortex",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "MX",
                    "id": 11,
                    "username": "Hannes"
                }
            ],
            "record": 31926
        },
        {
            "level": {
                "name": "expert_37_-_warp",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                }
            ],
            "record": 31210
        },
        {
            "level": {
                "name": "expert_38_-_trampolines",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                }
            ],
            "record": 11732
        },
        {
            "level": {
                "name": "expert_39_-_swing_shaft",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                }
            ],
            "record": 10640
        },
        {
            "level": {
                "name": "expert_40_-_fighters",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": null,
                    "id": 59,
                    "username": "Pintobean120"
                },
                {
                    "country": "US",
                    "id": 3,
                    "username": "Silverboxer"
                },
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                },
                {
                    "country": "US",
                    "id": 37,
                    "username": "monkeysmb"
                }
            ],
            "record": 10952
        },
        {
            "level": {
                "name": "expert_41_-_serial_jump",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                }
            ],
            "record": 54442
        },
        {
            "level": {
                "name": "expert_42_-_cross_floors",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                }
            ],
            "record": 11932
        },
        {
            "level": {
                "name": "expert_43_-_spinning_saw",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                },
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                }
            ],
            "record": 13942
        },
        {
            "level": {
                "name": "expert_44_-_chipped_pipes",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                }
            ],
            "record": 34220
        },
        {
            "level": {
                "name": "expert_45_-_flat_maze",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                }
            ],
            "record": 13606
        },
        {
            "level": {
                "name": "expert_46_-_guillotine",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                }
            ],
            "record": 11870
        },
        {
            "level": {
                "name": "expert_47_-_cork_screw",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 37,
                    "username": "monkeysmb"
                }
            ],
            "record": 9746
        },
        {
            "level": {
                "name": "expert_48_-_orbiters",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                }
            ],
            "record": 13366
        },
        {
            "level": {
                "name": "expert_49_-_twin_basin",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 3,
                    "username": "Silverboxer"
                },
                {
                    "country": null,
                    "id": 59,
                    "username": "Pintobean120"
                }
            ],
            "record": 10996
        },
        {
            "level": {
                "name": "expert_50_-_air_hockey",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                }
            ],
            "record": 15590
        }
    ],
    "expert_extra": [
        {
            "level": {
                "name": "expert_extra_1_-_charge",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 6,
                    "username": "Blendra"
                }
            ],
            "record": 13572
        },
        {
            "level": {
                "name": "expert_extra_2_-_strata",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                }
            ],
            "record": 32710
        },
        {
            "level": {
                "name": "expert_extra_3_-_puzzle",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 37,
                    "username": "monkeysmb"
                }
            ],
            "record": 14942
        },
        {
            "level": {
                "name": "expert_extra_4_-_giant_swing",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                }
            ],
            "record": 16920
        },
        {
            "level": {
                "name": "expert_extra_5_-_5_drums",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                }
            ],
            "record": 11320
        },
        {
            "level": {
                "name": "expert_extra_6_-_free_throw",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                },
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                },
                {
                    "country": "GB",
                    "id": 50,
                    "username": "AmoebaUK"
                },
                {
                    "country": "US",
                    "id": 37,
                    "username": "monkeysmb"
                },
                {
                    "country": null,
                    "id": 51,
                    "username": "Walkr"
                },
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                }
            ],
            "record": 52126
        },
        {
            "level": {
                "name": "expert_extra_7_-_pendulums",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                },
                {
                    "country": null,
                    "id": 59,
                    "username": "Pintobean120"
                }
            ],
            "record": 12982
        },
        {
            "level": {
                "name": "expert_extra_8_-_conical_slider",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                }
            ],
            "record": 13502
        },
        {
            "level": {
                "name": "expert_extra_9_-_construction",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                }
            ],
            "record": 12122
        },
        {
            "level": {
                "name": "expert_extra_10_-_train_worm",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 37,
                    "username": "monkeysmb"
                }
            ],
            "record": 12176
        }
    ],
    "master": [
        {
            "level": {
                "name": "master_1_-_centrifugal",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                },
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                },
                {
                    "country": "US",
                    "id": 37,
                    "username": "monkeysmb"
                }
            ],
            "record": 11670
        },
        {
            "level": {
                "name": "master_2_-_swing_bridges",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                },
                {
                    "country": "US",
                    "id": 37,
                    "username": "monkeysmb"
                }
            ],
            "record": 34302
        },
        {
            "level": {
                "name": "master_3_-_cylinders",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                },
                {
                    "country": "US",
                    "id": 37,
                    "username": "monkeysmb"
                }
            ],
            "record": 15066
        },
        {
            "level": {
                "name": "master_4_-_passage",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 37,
                    "username": "monkeysmb"
                }
            ],
            "record": 35676
        },
        {
            "level": {
                "name": "master_5_-_notch",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 37,
                    "username": "monkeysmb"
                }
            ],
            "record": 11870
        },
        {
            "level": {
                "name": "master_6_-_intermittent",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 37,
                    "username": "monkeysmb"
                },
                {
                    "country": "US",
                    "id": 47,
                    "username": "LogaSoba"
                }
            ],
            "record": 13752
        },
        {
            "level": {
                "name": "master_7_-_long_torus",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 37,
                    "username": "monkeysmb"
                }
            ],
            "record": 11340
        },
        {
            "level": {
                "name": "master_8_-_spasmodic",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                },
                {
                    "country": null,
                    "id": 56,
                    "username": "s8og5q6gbn"
                },
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                },
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                },
                {
                    "country": "US",
                    "id": 37,
                    "username": "monkeysmb"
                },
                {
                    "country": "US",
                    "id": 47,
                    "username": "LogaSoba"
                }
            ],
            "record": 12236
        },
        {
            "level": {
                "name": "master_9_-_double_twin",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 37,
                    "username": "monkeysmb"
                }
            ],
            "record": 11226
        },
        {
            "level": {
                "name": "master_10_-_clock_face",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 37,
                    "username": "monkeysmb"
                }
            ],
            "record": 12110
        }
    ],
    "master_extra": [
        {
            "level": {
                "name": "master_extra_1_-_variable_width",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                },
                {
                    "country": "US",
                    "id": 47,
                    "username": "LogaSoba"
                }
            ],
            "record": 11550
        },
        {
            "level": {
                "name": "master_extra_2_-_striker",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                },
                {
                    "country": null,
                    "id": 56,
                    "username": "s8og5q6gbn"
                },
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                },
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                },
                {
                    "country": "MX",
                    "id": 11,
                    "username": "Hannes"
                },
                {
                    "country": "US",
                    "id": 37,
                    "username": "monkeysmb"
                },
                {
                    "country": "US",
                    "id": 94,
                    "username": "thunder_147_"
                },
                {
                    "country": "US",
                    "id": 47,
                    "username": "LogaSoba"
                }
            ],
            "record": 52080
        },
        {
            "level": {
                "name": "master_extra_3_-_ooparts",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": null,
                    "id": 56,
                    "username": "s8og5q6gbn"
                },
                {
                    "country": "US",
                    "id": 37,
                    "username": "monkeysmb"
                },
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                },
                {
                    "country": "US",
                    "id": 10,
                    "username": "IkeSMB"
                },
                {
                    "country": "US",
                    "id": 47,
                    "username": "LogaSoba"
                }
            ],
            "record": 13982
        },
        {
            "level": {
                "name": "master_extra_4_-_planets",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                }
            ],
            "record": 51480
        },
        {
            "level": {
                "name": "master_extra_5_-_sliced_cheese",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                },
                {
                    "country": "US",
                    "id": 47,
                    "username": "LogaSoba"
                }
            ],
            "record": 13540
        },
        {
            "level": {
                "name": "master_extra_6_-_8_seesaws",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                }
            ],
            "record": 12686
        },
        {
            "level": {
                "name": "master_extra_7_-_synchronized",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                }
            ],
            "record": 32326
        },
        {
            "level": {
                "name": "master_extra_8_-_helix",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 47,
                    "username": "LogaSoba"
                },
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                }
            ],
            "record": 32662
        },
        {
            "level": {
                "name": "master_extra_9_-_dizzy_system",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                }
            ],
            "record": 15550
        },
        {
            "level": {
                "name": "master_extra_10_-_nintendo",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": null,
                    "id": 19,
                    "username": "Claris"
                },
                {
                    "country": null,
                    "id": 17,
                    "username": "Gonquai"
                }
            ],
            "record": 6082
        }
    ],
    "world_10": [
        {
            "level": {
                "name": "world_10-1_-_training",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                },
                {
                    "country": "US",
                    "id": 37,
                    "username": "monkeysmb"
                }
            ],
            "record": 17120
        },
        {
            "level": {
                "name": "world_10-2_-_gimmick",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                }
            ],
            "record": 15292
        },
        {
            "level": {
                "name": "world_10-3_-_mountain",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                },
                {
                    "country": "US",
                    "id": 1,
                    "username": "TonySMB"
                },
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                },
                {
                    "country": "US",
                    "id": 6,
                    "username": "Blendra"
                },
                {
                    "country": "US",
                    "id": 8,
                    "username": "Rmac"
                },
                {
                    "country": "US",
                    "id": 37,
                    "username": "monkeysmb"
                },
                {
                    "country": "US",
                    "id": 47,
                    "username": "LogaSoba"
                }
            ],
            "record": 12160
        },
        {
            "level": {
                "name": "world_10-4_-_disorder",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 37,
                    "username": "monkeysmb"
                }
            ],
            "record": 12406
        },
        {
            "level": {
                "name": "world_10-5_-_3D_maze",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                }
            ],
            "record": 12402
        },
        {
            "level": {
                "name": "world_10-6_-_labyrinth",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                }
            ],
            "record": 10916
        },
        {
            "level": {
                "name": "world_10-7_-_postmodern",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                }
            ],
            "record": 10170
        },
        {
            "level": {
                "name": "world_10-8_-_revolution",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                }
            ],
            "record": 13026
        },
        {
            "level": {
                "name": "world_10-9_-_invisible",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "CA",
                    "id": 4,
                    "username": "scrap651"
                }
            ],
            "record": 12890
        },
        {
            "level": {
                "name": "world_10-10_-_created_by",
                "timer_type": "sec_csec"
            },
            "profiles": [
                {
                    "country": "US",
                    "id": 14,
                    "username": "Alex"
                }
            ],
            "record": 13710
        }
    ]
}

const testCommand: Command = {
    discordExecute,
    aliases,
    description: [],
    arguments: [],
    examples: [],
};

export default testCommand;
