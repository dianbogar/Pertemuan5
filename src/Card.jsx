function Card() {
    return (
        <>
            <div class="flex justify-center items-center h-screen w-full bg-gradient-to-r from-blue-500 to-blue-600">
                <div class="w-1/2 bg-white rounded-lg shadow-2xl p-8 m-4">
                    <h1 class="block w-full tect-center tect-gray-800 text-2xl font-bold mb-6">
                        Kartu Tanda Penduduk
                    </h1>
                    <form action="/" method="post">
                        <div class="flex flex-col mb-4">
                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="nama"
                            >
 
                            </label>
                            <img src={process.env.PUBLIC_URL + '/dian.jpg'} class="flex-=col mb-1 w-40 h-50" />
                        </div>

                        <div class="flex flex-col mb-4">
                            <label
                            class="mb-2 font-bold text-lg text-gray-900"
                            for="nama"
                            >
                                Nama
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="nama"
                                id="nama"
                                placeholder="Dian Nastasia Bogar"
                            />
                        </div>
                        <div class="flex flex-col mb-4">
                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="tempat_tgl_lahir"
                            >
                                Tempat/Tgl Lahir
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="tempat_tgl_lahir"
                                id="tempat_tgl_lahir"
                                placeholder="Talengen, 17 Juni 2002"
                            />
                        </div>
                        <div class="flex flex-col mb-4">
                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="jenis_kelamain"
                            >
                                Jenis Kelamin
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="jenis_kelamin"
                                id="jenis_kelamin"
                                placeholder="Perempuan"
                            />
                        </div>
                        <div class="flex flex-col mb-4">
                            <label
                            class="mb-2 font-bold text-lg text-gray-900"
                            for="alamat"
                            >
                                Alamat
                            </label>
                            <input
                                class="border py-2 px3 text-grey-800"
                                type="text"
                                name="alamat"
                                id="alamat"
                                placeholder="Kampung Talengen"
                            />
                        </div>
                        <div class="flex flex-col mb-4">
                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="agama"
                            >
                                Agama
                            </label>
                            <input
                                class="border py-2 px3 text-grey-800"
                                type="text"
                                name="agama"
                                id="agama"
                                placeholder="Kristen Protestan"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Card;