import getCurrentUser from "../../../utils/getCurrentUser";
import { redirect } from "next/navigation";


const ProfilePage: React.FC = async () => {
  const user = await getCurrentUser();

  if (!user) redirect("/login");

  return (
    <>
      {/* xxs:text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl */}
      <div className="space-y-2 mt-10 mx-5 h-[720px] py-5 bg-customYellow justify-center items-center">
        <div className="flex flex-row justify-between">
          <div className="pl-10 font-bold text-black text-xl">
            STUDENT BORROWERS CARD
          </div>
          <div className="-space-y-2">
            <div className="pr-10 font-semibold text-black text-lg">
              GJC Library
            </div>
            <div className="pr-10 font-semibold text-black text-lg">
              San Isidro, N.E.
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <span className="pl-10 font-bold text-black text-xl">
            Name:
          </span>
          <span className="ml-2 border-b border-black w-96 font-semibold text-black text-xl">
            Melvin E. Nogoy
          </span>
        </div>
        <div className="flex flex-row pb-10">
          <span className="pl-10 font-bold text-black text-xl">
            Year:
          </span>
          <span className="ml-3.5 border-b border-black w-36 font-bold text-black text-xl">
            BSIT - III
          </span>
          <span className="pl-5 font-bold text-black text-xl">
            Section:
          </span>
          <span className="ml-3.5 border-b border-black w-36 font-bold text-black text-xl">
            A
          </span>
        </div>
        <div>
          <div className="mx-10 border-t border-b border-black font-semibold ">
            <div className="grid grid-cols-6 ">

              <div className=" border-r border-black space-x-5  pl-3">
                <div className="pl-3 flex flex-row gap-4 ">
                  <div className="flex flex-col">
                    <span>
                      Due
                    </span>
                    <span>
                      date
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span>
                      :
                    </span>
                    <span>
                      :
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span>
                      Call
                    </span>
                    <span>
                      acc. #
                    </span>
                  </div>
                </div>
              </div>

              <div className="pl-4 border-r border-black space-x-5">
                <div className="flex flex-row gap-4">
                  <div className="flex flex-col">
                    <span>
                      Due
                    </span>
                    <span>
                      date
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span>
                      :
                    </span>
                    <span>
                      :
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span>
                      Call
                    </span>
                    <span>
                      acc. #
                    </span>
                  </div>
                </div>
              </div>

              <div className="pl-4 border-r border-black space-x-5">
                <div className="flex flex-row gap-4">
                  <div className="flex flex-col">
                    <span>
                      Due
                    </span>
                    <span>
                      date
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span>
                      :
                    </span>
                    <span>
                      :
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span>
                      Call
                    </span>
                    <span>
                      acc. #
                    </span>
                  </div>
                </div>
              </div>

              <div className="pl-4 border-r border-black space-x-5">
                <div className="flex flex-row gap-4">
                  <div className="flex flex-col">
                    <span>
                      Due
                    </span>
                    <span>
                      date
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span>
                      :
                    </span>
                    <span>
                      :
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span>
                      Call
                    </span>
                    <span>
                      acc. #
                    </span>
                  </div>
                </div>
              </div>

              <div className="pl-4 border-r border-black space-x-5">
                <div className="flex flex-row gap-4">
                  <div className="flex flex-col">
                    <span>
                      Due
                    </span>
                    <span>
                      date
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span>
                      :
                    </span>
                    <span>
                      :
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span>
                      Call
                    </span>
                    <span>
                      acc. #
                    </span>
                  </div>
                </div>
              </div>

              <div className="pl-4 space-x-5">
                <div className="flex flex-row gap-4">
                  <div className="flex flex-col">
                    <span>
                      Due
                    </span>
                    <span>
                      date
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span>
                      :
                    </span>
                    <span>
                      :
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span>
                      Call
                    </span>
                    <span>
                      acc. #
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-10 font-semibold text-center">
            <div className=" grid grid-cols-6 ">

              <div className="flex flex-col">
                <div className="py-2 border-r border-b border-black space-x-5">
                  <span>
                    Column 1
                  </span>
                </div>
                <div className="py-2 border-r  border-b border-black space-x-5">
                  <span>
                    Column 1
                  </span>
                </div>
                <div className="py-2 border-r border-b border-black space-x-5">
                  <span>
                    Column 1
                  </span>
                </div>
                <div className="py-2 border-r  border-b border-black space-x-5">
                  <span>
                    Column 1
                  </span>
                </div>
                <div className="py-2 border-r border-b border-black space-x-5">
                  <span>
                    Column 1
                  </span>
                </div>
                <div className="py-2 border-r  border-b border-black space-x-5">
                  <span>
                    Column 1
                  </span>
                </div>
                <div className="py-2 border-r  border-b border-black space-x-5">
                  <span>
                    Column 1
                  </span>
                </div>
                <div className="py-2 border-r  border-b border-black space-x-5">
                  <span>
                    Column 1
                  </span>
                </div>
                <div className="py-2 border-r  border-b border-black space-x-5">
                  <span>
                    Column 1
                  </span>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="py-2 border-r border-b border-black space-x-5">
                  <span>
                    Column 2
                  </span>
                </div>
                <div className="py-2 border-r  border-b border-black space-x-5">
                  <span>
                    Column 2
                  </span>
                </div>
                <div className="py-2 border-r border-b border-black space-x-5">
                  <span>
                    Column 2
                  </span>
                </div>
                <div className="py-2 border-r  border-b border-black space-x-5">
                  <span>
                    Column 2
                  </span>
                </div>
                <div className="py-2 border-r border-b border-black space-x-5">
                  <span>
                    Column 2
                  </span>
                </div>
                <div className="py-2 border-r  border-b border-black space-x-5">
                  <span>
                    Column 2
                  </span>
                </div>
                <div className="py-2 border-r  border-b border-black space-x-5">
                  <span>
                    Column 2
                  </span>
                </div>
                <div className="py-2 border-r  border-b border-black space-x-5">
                  <span>
                    Column 2
                  </span>
                </div>
                <div className="py-2 border-r  border-b border-black space-x-5">
                  <span>
                    Column 2
                  </span>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="py-2 border-r border-b border-black space-x-5">
                  <span>
                    Column 3
                  </span>
                </div>
                <div className="py-2 border-r  border-b border-black space-x-5">
                  <span>
                    Column 3
                  </span>
                </div>
                <div className="py-2 border-r border-b border-black space-x-5">
                  <span>
                    Column 3
                  </span>
                </div>
                <div className="py-2 border-r  border-b border-black space-x-5">
                  <span>
                    Column 3
                  </span>
                </div>
                <div className="py-2 border-r border-b border-black space-x-5">
                  <span>
                    Column 3
                  </span>
                </div>
                <div className="py-2 border-r  border-b border-black space-x-5">
                  <span>
                    Column 3
                  </span>
                </div>
                <div className="py-2 border-r  border-b border-black space-x-5">
                  <span>
                    Column 3
                  </span>
                </div>
                <div className="py-2 border-r  border-b border-black space-x-5">
                  <span>
                    Column 3
                  </span>
                </div>
                <div className="py-2 border-r  border-b border-black space-x-5">
                  <span>
                    Column 3
                  </span>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="py-2 border-r border-b border-black space-x-5">
                  <span>
                    Column 4
                  </span>
                </div>
                <div className="py-2 border-r  border-b border-black space-x-5">
                  <span>
                    Column 4
                  </span>
                </div>
                <div className="py-2 border-r border-b border-black space-x-5">
                  <span>
                    Column 4
                  </span>
                </div>
                <div className="py-2 border-r  border-b border-black space-x-5">
                  <span>
                    Column 4
                  </span>
                </div>
                <div className="py-2 border-r border-b border-black space-x-5">
                  <span>
                    Column 4
                  </span>
                </div>
                <div className="py-2 border-r  border-b border-black space-x-5">
                  <span>
                    Column 4
                  </span>
                </div>
                <div className="py-2 border-r  border-b border-black space-x-5">
                  <span>
                    Column 4
                  </span>
                </div>
                <div className="py-2 border-r  border-b border-black space-x-5">
                  <span>
                    Column 4
                  </span>
                </div>
                <div className="py-2 border-r  border-b border-black space-x-5">
                  <span>
                    Column 4
                  </span>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="py-2 border-r border-b border-black space-x-5">
                  <span>
                    Column 5
                  </span>
                </div>
                <div className="py-2 border-r  border-b border-black space-x-5">
                  <span>
                    Column 5
                  </span>
                </div>
                <div className="py-2 border-r border-b border-black space-x-5">
                  <span>
                    Column 5
                  </span>
                </div>
                <div className="py-2 border-r  border-b border-black space-x-5">
                  <span>
                    Column 5
                  </span>
                </div>
                <div className="py-2 border-r border-b border-black space-x-5">
                  <span>
                    Column 5
                  </span>
                </div>
                <div className="py-2 border-r  border-b border-black space-x-5">
                  <span>
                    Column 5
                  </span>
                </div>
                <div className="py-2 border-r  border-b border-black space-x-5">
                  <span>
                    Column 5
                  </span>
                </div>
                <div className="py-2 border-r  border-b border-black space-x-5">
                  <span>
                    Column 5
                  </span>
                </div>
                <div className="py-2 border-r  border-b border-black space-x-5">
                  <span>
                    Column 5
                  </span>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="py-2 border-b border-black space-x-5">
                  <span>
                    Column 6
                  </span>
                </div>
                <div className="py-2  border-b border-black space-x-5">
                  <span>
                    Column 6
                  </span>
                </div>
                <div className="py-2 border-b border-black space-x-5">
                  <span>
                    Column 6
                  </span>
                </div>
                <div className="py-2  border-b border-black space-x-5">
                  <span>
                    Column 6
                  </span>
                </div>
                <div className="py-2 border-b border-black space-x-5">
                  <span>
                    Column 6
                  </span>
                </div>
                <div className="py-2  border-b border-black space-x-5">
                  <span>
                    Column 6
                  </span>
                </div>
                <div className="py-2  border-b border-black space-x-5">
                  <span>
                    Column 6
                  </span>
                </div>
                <div className="py-2  border-b border-black space-x-5">
                  <span>
                    Column 6
                  </span>
                </div>
                <div className="py-2  border-b border-black space-x-5">
                  <span>
                    Column 6
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>




      </div>
    </>

  );
};

export default ProfilePage;
