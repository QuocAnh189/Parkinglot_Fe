//hooks
import { useEffect, useState } from "react";

//components
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { RFIDReaderInput } from "rfid-reader-input";

//icon
import { BiRfid } from "react-icons/bi";

//interface
import { ECardType, EVehicleType } from "@constants/enum";

interface IProp {
  handleChangeForm: (name: string, value: any) => void;
}

const FormCreateCard = (props: IProp) => {
  const { handleChangeForm } = props;

  const [serialCard, setSerialCard] = useState("");
  const [openCardReaderWindow, setOpenCardReaderWindow] =
    useState<boolean>(false);

  const handleOpenRFID = () => {
    setOpenCardReaderWindow(true);
  };

  const handleCloseRFID = () => {
    setOpenCardReaderWindow(false);
  };

  useEffect(() => {
    if (serialCard) {
      handleChangeForm("uid", serialCard);
    }
  }, [serialCard]);

  return (
    <div className="grid gap-4 py-4 h-[400px]">
      <div className="absolute top-[50%] left-[50%]">
        <RFIDReaderInput
          textTitle="Quẹt thẻ của bạn"
          textBody="Hãy đợi tín hiệu"
          isOpen={openCardReaderWindow}
          onRequestClose={handleCloseRFID}
          handleCodeCardRFID={setSerialCard}
        />
      </div>

      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Mã thẻ
        </Label>
        <Input readOnly className="col-span-3" value={serialCard} />
        <button
          type="button"
          className="absolute right-10 hover:cursor-pointer"
          onClick={handleOpenRFID}
        >
          <BiRfid size={24} />
        </button>
      </div>

      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="username" className="text-right">
          Tên chủ thẻ
        </Label>
        <Input
          className="col-span-3"
          name="owner_name"
          onChange={(e: any) => {
            handleChangeForm("owner_name", e.target.value);
          }}
        />
      </div>

      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Loại xe
        </Label>
        <Select
          name="vehicle_type"
          onValueChange={(value: EVehicleType) => {
            handleChangeForm("vehicle_type", value);
          }}
        >
          <SelectTrigger className="w-[277px]">
            <SelectValue placeholder="Chọn loại xe" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value={EVehicleType.MOTORBIKE}>Xe gắn máy</SelectItem>
              <SelectItem value={EVehicleType.CAR}>Xe ô tô</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Loại thẻ
        </Label>
        <Select
          name="vehicle_type"
          onValueChange={(value: EVehicleType) => {
            handleChangeForm("vehicle_type", value);
          }}
        >
          <SelectTrigger className="w-[277px]">
            <SelectValue placeholder="Chọn loại thẻ" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value={ECardType.MONTH}>Thẻ tháng</SelectItem>
              <SelectItem value={ECardType.DAY}>Thẻ ngày</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Biển số xe
        </Label>
        <Input
          name="license_plate"
          className="col-span-3"
          onChange={(e) => {
            handleChangeForm("license_plate", e.target.value);
          }}
        />
      </div>

      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Hạn thẻ
        </Label>
        <Input
          name="exp_date"
          className="col-span-3"
          type="date"
          onChange={(e) => {
            handleChangeForm(
              "exp_date",
              new Date(e.target.value).toISOString()
            );
          }}
        />
      </div>
    </div>
  );
};

export default FormCreateCard;
