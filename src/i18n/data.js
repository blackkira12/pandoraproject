
export const translations = {
    en: {
        nav: {
            home: "Home",
            screener: "Dev Screener",
            quiz: "Parent Quiz",
            lang: "Bahasa Indonesia"
        },
        hero: {
            title: "Unlock Potential.",
            subtitle: "The Pandora Project",
            desc: "Money buys comfort, not character. <br> Evidence-based parenting strategies for the next generation of Indonesian leaders.",
            btnScreener: "Check Milestones (Denver II)",
            btnQuiz: "Take the Quiz"
        },
        screener: {
            title: "Developmental Checkpoints (Denver II)",
            desc: "These are scientific benchmarks, not grades. Gaps here indicate a need for stimulation, not panic.",
            milestones: "Milestones",
            domains: {
                "Personal-Social": "Personal-Social",
                "Fine Motor": "Fine Motor",
                "Language": "Language",
                "Gross Motor": "Gross Motor"
            },
            critical: "Critical",
            items: {
                "ps-1": "Smiles spontaneously",
                "ps-2": "Regards face",
                "fm-1": "Follows past midline",
                "lg-1": "Responds to bell/sound",
                "gm-1": "Lifts head",
                "ps-3": "Feeds self (cracker)",
                "fm-2": "Passes cube hand to hand",
                "lg-2": "Dada/Mama (non-specific)",
                "gm-2": "Sits without support",
                "gm-3": "Stands holding on",
                "ps-4": "Plays ball with examiner",
                "fm-3": "Scribbles",
                "lg-3": "3 words other than Mama/Dada",
                "gm-4": "Walks well",
                "ps-5": "Washes and dries hands",
                "fm-4": "Tower of 4 cubes",
                "lg-4": "Knows 2 adjectives",
                "gm-5": "Jumps in place",
                "ps-6": "Dresses self without supervision",
                "fm-5": "Copies cross (+)",
                "lg-5": "Defines 5 words",
                "gm-6": "Balances on 1 foot (5 secs)"
            }
        },
        quiz: {
            scenario: "Scenario",
            yourStyle: "Your Style Archetype",
            globalContext: "Global Context:",
            retake: "Retake Quiz",
            questions: [
                {
                    text: "Your 4-year-old refuses to eat their vegetables at dinner. What do you do?",
                    options: [
                        "Feed them yourself or blend it into milk so they eat it. (Protection)",
                        "Force them to stay at the table until they finish. (Control)",
                        "Explain why it's healthy, offer a choice (e.g., 'Broccoli or Carrots?'), but don't force. (Guidance)"
                    ]
                },
                {
                    text: "Your child trips and falls while running. They are crying but not bleeding.",
                    options: [
                        "Rush to them, pick them up, and blame the floor. 'Naughty floor!'",
                        "Tell them to stop crying immediately. 'Boys don't cry.'",
                        "Acknowledge the pain ('That hurt, didn't it?') then encourage them to stand up. 'You're okay.'"
                    ]
                },
                {
                    text: "It's time to get ready for school. Your 5-year-old is playing.",
                    options: [
                        "Have the nanny dress them while they keep playing.",
                        "Yell that they are late and physically dress them roughly.",
                        "Give a 5-minute warning, then calmly explain that playing time is over."
                    ]
                }
            ],
            results: {
                authoritative: {
                    title: "The Lighthouse (Authoritative)",
                    desc: "You balance High Warmth with High Standards. This is the global gold standard.",
                    comps: "Similar to the best practices in the **USA** (Self-expression) and modern **Japan** (Independence). You are raising a self-reliant leader."
                },
                permissive: {
                    title: "The Concierge (Permissive)",
                    desc: "High Warmth, Low Standards. You might be doing too much *for* your child.",
                    comps: "Common in affluent **Indonesia**. Compare to **Japan**: A 3-year-old there carries their own bag. Try stepping back to let them fail safely."
                },
                authoritarian: {
                    title: "The Commander (Authoritarian)",
                    desc: "Low Warmth, High Standards. You demand obedience, but at what cost?",
                    comps: "Historically common in **China**, but modern research warns this stifles emotional intelligence. **US** research shows this can lead to rebellion."
                }
            }
        },
        comparison: {
            title: "The \"Privilege\" Trap",
            desc: "Affluence often removes the very friction children need to grow. <br> Compare a typical day for a 4-year-old:",
            indoLabel: "🇮🇩 Jakarta (Affluent)",
            japanLabel: "🇯🇵 Tokyo",
            lesson: "<strong>The Lesson:</strong> Do not buy their way out of struggle.<br> <span style=\"color: var(--color-primary);\">Struggle is where the neurons grow.</span>",
            scenarios: [
                {
                    title: "7:00 AM: Getting Ready",
                    indo: { action: "Nanny dresses the child, packs the bag, and carries the child to the car.", outcome: "Zero friction, but zero motor skills practice." },
                    japan: { action: "Child wakes up, changes clothes independently, packs bento/books.", outcome: "Building Executive Function (Planning) + Fine Motor skills." }
                },
                {
                    title: "7:45 AM: The Commute",
                    indo: { action: "Driven in private car. Child watches iPad/YouTube on the way.", outcome: "Sedentary. High dopamine spike before school." },
                    japan: { action: "Walks to school (or bus/train). Navigates sidewalks safely.", outcome: "Daily 20m exercise. Spatial awareness. Independence." }
                },
                {
                    title: "12:00 PM: Lunch Time",
                    indo: { action: "Nanny feeds the child to ensure they 'finish everything'.", outcome: "Learns that eating is a transactional task, not a bodily cue." },
                    japan: { action: "Sets the table, serves peers (Kyushoku), cleans up after eating.", outcome: "Responsibility, Community Service, Motor coordination." }
                }
            ]
        }
    },
    id: {
        nav: {
            home: "Beranda",
            screener: "Deteksi Tumbuh Kembang",
            quiz: "Kuis Orang Tua",
            lang: "English"
        },
        hero: {
            title: "Buka Potensi Mereka.",
            subtitle: "The Pandora Project",
            desc: "Uang membeli kenyamanan, bukan karakter. <br> Strategi parenting berbasis bukti untuk generasi pemimpin Indonesia berikutnya.",
            btnScreener: "Cek Milestones (Denver II)",
            btnQuiz: "Ikuti Kuis"
        },
        screener: {
            title: "Titik Cek Perkembangan (Denver II)",
            desc: "Ini adalah patokan ilmiah, bukan nilai rapot. Kesenjangan di sini menunjukkan kebutuhan stimulasi, bukan kepanikan.",
            milestones: "Milestones",
            domains: {
                "Personal-Social": "Personal-Sosial",
                "Fine Motor": "Motorik Halus",
                "Language": "Bahasa",
                "Gross Motor": "Motorik Kasar"
            },
            critical: "Kritis",
            items: {
                "ps-1": "Tersenyum spontan",
                "ps-2": "Menatap wajah",
                "fm-1": "Mengikuti lewat garis tengah",
                "lg-1": "Merespons bel/suara",
                "gm-1": "Mengangkat kepala",
                "ps-3": "Makan sendiri (biskuit)",
                "fm-2": "Memindah kubus antar tangan",
                "lg-2": "Dada/Mama (tidak spesifik)",
                "gm-2": "Duduk tanpa pegangan",
                "gm-3": "Berdiri berpegangan",
                "ps-4": "Main bola dengan pemeriksa",
                "fm-3": "Mencoret-coret",
                "lg-3": "3 kata selain Mama/Dada",
                "gm-4": "Berjalan dengan baik",
                "ps-5": "Mencuci dan mengeringkan tangan",
                "fm-4": "Menara 4 kubus",
                "lg-4": "Tahu 2 kata sifat",
                "gm-5": "Melompat di tempat",
                "ps-6": "Berpakaian sendiri tanpa bantuan",
                "fm-5": "Meniru tanda tambah (+)",
                "lg-5": "Mendefinisikan 5 kata",
                "gm-6": "Berdiri 1 kaki (5 detik)"
            }
        },
        quiz: {
            scenario: "Skenario",
            yourStyle: "Arketipe Gaya Anda",
            globalContext: "Konteks Global:",
            retake: "Ulangi Kuis",
            questions: [
                {
                    text: "Anak 4 tahun Anda menolak makan sayur saat makan malam. Apa yang Anda lakukan?",
                    options: [
                        "Suapi mereka sendiri atau blender ke dalam susu supaya termakan. (Perlindungan)",
                        "Paksa mereka duduk di meja sampai habis. (Kontrol)",
                        "Jelaskan kenapa sehat, beri pilihan (misal: 'Brokoli atau Wortel?'), tapi jangan paksa. (Bimbingan)"
                    ]
                },
                {
                    text: "Anak Anda tersandung dan jatuh saat berlari. Menangis tapi tidak berdarah.",
                    options: [
                        "Lari ke mereka, gendong, dan salahkan lantainya. 'Lantai nakal!'",
                        "Suruh berhenti menangis segera. 'Laki-laki tidak boleh nangis.'",
                        "Akui rasa sakitnya ('Sakit ya?'), lalu dorong mereka untuk berdiri. 'Kamu oke kok.'"
                    ]
                },
                {
                    text: "Waktunya siap-siap sekolah. Anak 5 tahun Anda masih asyik main.",
                    options: [
                        "Biarkan nanny memakaikan baju sambil mereka tetap main.",
                        "Teriak kalau sudah telat dan pakaikan baju dengan kasar.",
                        "Beri peringatan 5 menit, lalu jelaskan dengan tenang bahwa waktu main habis."
                    ]
                }
            ],
            results: {
                authoritative: {
                    title: "Sang Mercusuar (Authoritative)",
                    desc: "Anda menyeimbangkan Kehangatan Tinggi dengan Standar Tinggi. Ini adalah standar emas global.",
                    comps: "Mirip dengan praktik terbaik di **AS** (Ekspresi Diri) dan **Jepang** modern (Kemandirian). Anda membesarkan pemimpin yang mandiri."
                },
                permissive: {
                    title: "Sang Concierge (Permissive)",
                    desc: "Kehangatan Tinggi, Standar Rendah. Anda mungkin melakukan terlalu banyak hal *untuk* anak.",
                    comps: "Umum di kalangan **menengah atas Indonesia**. Bandingkan dengan **Jepang**: Anak 3 tahun di sana bawa tas sendiri. Cobalah mundur sedikit agar mereka belajar gagal dengan aman."
                },
                authoritarian: {
                    title: "Sang Komandan (Authoritarian)",
                    desc: "Kehangatan Rendah, Standar Tinggi. Anda menuntut ketaatan, tapi dengan harga apa?",
                    comps: "Secara historis umum di **China**, tapi riset modern memperingatkan ini menghambat kecerdasan emosi. Riset **AS** menunjukkan ini bisa memicu pemberontakan."
                }
            }
        },
        comparison: {
            title: "Jebakan \"Privilege\"",
            desc: "Kekayaan seringkali menghilangkan gesekan/kesulitan yang justru dibutuhkan anak untuk tumbuh. <br> Bandingkan keseharian anak 4 tahun:",
            indoLabel: "🇮🇩 Jakarta (Affluent)",
            japanLabel: "🇯🇵 Tokyo",
            lesson: "<strong>Pelajaran:</strong> Jangan beli jalan keluar dari kesulitan.<br> <span style=\"color: var(--color-primary);\">Kesulitan adalah tempat neuron berkembang.</span>",
            scenarios: [
                {
                    title: "07:00: Siap-siap",
                    indo: { action: "Nanny memakaikan baju, menyiapkan tas, dan menggendong ke mobil.", outcome: "Nol gesekan, tapi nol latihan motorik." },
                    japan: { action: "Bangun sendiri, ganti baju sendiri, siapkan bento/buku.", outcome: "Membangun Fungsi Eksekutif (Perencanaan) + Motorik Halus." }
                },
                {
                    title: "07:45: Perjalanan",
                    indo: { action: "Diantar mobil pribadi. Nonton iPad/YouTube sepanjang jalan.", outcome: "Sedenter. Lonjakan dopamin tinggi sebelum sekolah." },
                    japan: { action: "Jalan kaki ke sekolah (atau bus/kereta). Navigasi trotoar.", outcome: "Olahraga 20 menit/hari. Kesadaran spasial. Kemandirian." }
                },
                {
                    title: "12:00: Makan Siang",
                    indo: { action: "Disuapi nanny biar 'pasti habis'.", outcome: "Belajar bahwa makan adalah tugas transaksional, bukan sinyal tubuh." },
                    japan: { action: "Siapkan meja, melayani teman (Kyushoku), bersih-bersih setelah makan.", outcome: "Tanggung jawab, Pelayanan Komunitas, Koordinasi motorik." }
                }
            ]
        }
    }
};
