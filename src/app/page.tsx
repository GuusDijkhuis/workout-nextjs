"use client";

import { Icon } from "@/components/ui/icon/Icon";
import { Phrase } from "@/components/ui/typography/Phrase";
import { Heading } from "@/components/ui/typography/Heading";

const Home = () => (
  <div className="flex flex-col gap-4">
    <Phrase fontWeight="bold" size='xl' italic underline uppercase>Hallo</Phrase>
    <Heading fontWeight="black">Hallo</Heading>
    <Icon name="chevron-right" size="xs" />
    <Icon color="danger" name="chevron-right" size="sm" />
    <Icon name="chevron-right" size="md" />
    <Icon name="chevron-right" size="lg" />
    <Icon color="warning" name="chevron-right" size="xl" />
  </div>
);

export default Home;
