import Button from "@/components//common/button";
import Card from "@/components/common/card";
import Title from "@/components//common/title";
import { CalendarIcon, DownloadIcon } from "@radix-ui/react-icons";

export default function HomePage() {
  return (
    <div>
      <Card>
        <div className="mb-24 flex justify-between">
          <Title title="Information" />
          <div>
            <Button>
              <>
                <DownloadIcon className="w-24 h-24" />
                Download Info
              </>
            </Button>
          </div>
        </div>
        <div className="flex gap-18">
          {[1, 1, 1, 1].map((_, index) => (
            <div
              key={index}
              className="bg-primary-100 shadow-lg rounded-18 w-1/4 p-12 flex gap-12 text-grey"
            >
              <div className="p-4 rounded-hafl bg-grey w-48 h-48 flex items-center text-white justify-center">
                <CalendarIcon className="w-24 h-24" />
              </div>
              <div>
                <div className="text-white font-medium">309</div>
                <p>Total Attendance</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
