---
title: 'Board Configuration'
description: 'Select the Jira board that supplies issues, filters, sprints, and releases to an Advanced story map.'
---

The selected Jira board is the basis for a dynamic map. Its filter determines the issues in scope and supplies the quick filters, sprints, and visible releases available in the map.

## Select a board

1. Open the story map.
2. Go to **Settings → Board**.
3. Search for and select the Jira board that represents the work you want to map.
4. Return to the map and confirm that the expected issues and planning lanes are available.

If the map is dynamic, changes to the board's issue scope are reflected when the map loads its data. A static map can use a board as a backlog and as the source for sprints and releases, but the static map maintains its own ordered backbone.

## What the board controls

- **Issue scope:** the board filter determines which Jira issues are available to a dynamic map.
- **Quick filters:** filters configured on the board appear in the map's filter control.
- **Sprints:** a Scrum board supplies the sprints used by sprint swimlanes.
- **Releases:** versions visible to the board's projects appear in release planning.

## Visibility and permissions

Share the board filter with every person who must use the map. Jira permissions still apply: a person who cannot view the board, its filter, a project, or an issue will not gain access through Advanced Story Maps.

For a board that covers several projects, sprint changes require **Manage Sprints** permission in every included project. Release assignments remain project-specific because Jira versions belong to a project.

## Keep the configuration understandable

Choose a board whose scope matches the purpose of the map. If an existing board mixes unrelated work or changes frequently, create a dedicated Jira board and filter for the story map. Document any shared filter assumptions so later board changes do not unexpectedly alter the map.

See [Common Issues & Questions](/docs/support/troubleshooting?edition=pro) when sprints, releases, or issues are missing.
2. **Check Prerequisites**: Verify permissions and connectivity
3. **Test Configuration**: Validate board and filter settings
4. **Contact Support**: For persistent issues

## Advanced Board Features

### Custom Field Mapping

Map Jira custom fields to story map elements:

**Swimlane Mapping:**
- Map custom fields to horizontal swimlanes
- Support for select lists, radio buttons
- Multi-value field handling
- Dynamic swimlane creation

**Card Display:**
- Choose which fields appear on cards
- Configure field formatting
- Set up conditional display rules
- Optimize for readability

### Board Analytics

**Usage Statistics:**
- Sync frequency and performance
- User activity tracking
- Feature utilization metrics
- Performance optimization suggestions

**Health Monitoring:**
- Connection status alerts
- Sync error notifications
- Performance degradation warnings
- Proactive maintenance recommendations

---

## Next Steps

- [Settings](/docs/pro/features/settings) - Configure board-specific preferences
- [Map Types](/docs/pro/features/map-types) - Understand dynamic vs static maps
- [Admin Guide](/docs/pro/admin-guide) - Set up organizational board policies
