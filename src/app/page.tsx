"use client";

import { Heading } from "@/components/Heading";
import { Icon } from "@/components/Icon";
import { Text } from "@/components/Text";
import { Button } from "@/components/ui/Button";

const Home = () => (
  <div className="flex flex-col gap-4">
    <div className="h-12 w-12 bg-white rounded-sm shadow-xs">
      <Text bold>Hallo</Text>
    </div>
    <div className="h-12 w-12 bg-white rounded-sm shadow-sm">
      <Text bold underline>
        Hallo
      </Text>
    </div>
    <div className="h-12 w-12 bg-white rounded-sm shadow-md">
      <Text underline>Hallo</Text>
    </div>
    <div className="h-12 w-12 bg-white rounded-sm shadow-lg">
      <Text bold italic underline>
        Hallo
      </Text>
    </div>
    <div className="h-12 w-12 bg-white rounded-sm shadow-xl">
      <Text bold italic>
        Hallo
      </Text>
    </div>
    <div className="h-12 w-12 bg-white rounded-sm shadow-2xl">
      <Text italic>Hallo</Text>
    </div>
    <div className="h-12 w-12 bg-white rounded-sm shadow-3xl">
      <Text size="lg">Hallo</Text>
    </div>
    <div className="h-12 w-12 bg-white rounded-sm shadow-4xl">
      <Text size="xl">Hallo</Text>
    </div>
    <Heading>Title</Heading>
    <Heading size={1}>Title</Heading>
    <Heading size={5}>Title</Heading>
    <Heading size={3}>Title</Heading>
    <Icon name="chevron-right" size="xs" />
    <Icon color="danger" name="chevron-right" size="sm" />
    <Icon name="chevron-right" size="md" />
    <Icon name="chevron-right" size="lg" />
    <Icon color="warning" name="chevron-right" size="xl" />
    <Button onClick={() => console.log("Click!!")} variant="primary">
      Button
    </Button>
    <Button onClick={() => console.log("Click!!")} variant="secondary">
      Button
    </Button>
    <Button onClick={() => console.log("Click!!")} variant="outlined">
      Button
    </Button>
  </div>
);

export default Home;
