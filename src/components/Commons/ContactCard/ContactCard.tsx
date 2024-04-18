import { ContactType } from "@/types";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  Divider,
  Tooltip,
} from "@nextui-org/react";
import { FaTrash } from "react-icons/fa";

interface Props {
  data: ContactType;
  onPress: (data: ContactType) => void;
  onPressDelete: (data: ContactType) => void;
  isDisabled: boolean;
}
export default function ContactCard(props: Readonly<Props>) {
  const { data, onPress, onPressDelete, isDisabled } = props;

  return (
    <Card
      isHoverable
      isPressable
      isBlurred
      isDisabled={isDisabled}
      shadow="md"
      onPress={() => onPress(data)}
    >
      <CardBody className="flex flex-row justify-between items-center gap-4">
        <div className="flex flex-row items-center gap-2">
          <Avatar src={data.photo} size="lg" />
          <Divider orientation="vertical" />
          <div>
            <div className="text-md text-left font-semibold truncate">
              {data.firstName}
            </div>
            <div className="text-sm text-left font-normal truncate">
              {data.lastName}
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center gap-2">
          <div>
            <div className="text-xs text-center font-light">age</div>
            <div className="text-lg text-center font-bold">{data.age}</div>
          </div>
          <Divider orientation="vertical" />
          <Tooltip content="Delete">
            <Button
              isIconOnly
              color="secondary"
              size="sm"
              onClick={() => onPressDelete(data)}
            >
              <FaTrash />
            </Button>
          </Tooltip>
        </div>
      </CardBody>
    </Card>
  );
}
