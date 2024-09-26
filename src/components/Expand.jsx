import React, { useState } from 'react';
import Icon from '@mdi/react';
import { mdiArrowExpandDown, mdiArrowCollapseUp } from '@mdi/js';

export default function ExpandIcon({ expanded, onClick }) {
	return (
		<Icon
			path={expanded ? mdiArrowCollapseUp : mdiArrowExpandDown}
			size={1}
			onClick={onClick}
			style={{ cursor: 'pointer' }}
		/>
	);
}
