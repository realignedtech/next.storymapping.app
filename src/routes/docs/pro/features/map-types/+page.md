---
title: 'Map Types'
description: 'Understanding Dynamic and Static Story Maps in Advanced Story Maps'
---

# Map Types

Advanced Story Maps offers two distinct map types to suit different planning needs: **Dynamic Maps** and **Static Maps**. Understanding when and how to use each type will help you get the most out of your story mapping experience.

## Dynamic Maps

Dynamic Maps automatically sync with your Jira boards and reflect real-time changes from your project.

### How Dynamic Maps Work

- **Automatic Sync**: Issues are automatically pulled from your selected Jira board
- **Real-time Updates**: Changes in Jira (status, assignee, priority) are reflected immediately
- **Board Integration**: Maps stay synchronized with your Kanban or Scrum boards
- **Live Data**: Card information updates as team members work on issues

### Best Use Cases for Dynamic Maps

- **Active Development**: Perfect for ongoing sprints and active development work
- **Team Collaboration**: When multiple team members need real-time visibility
- **Agile Planning**: Ideal for sprint planning and daily standups
- **Live Dashboards**: When the map serves as a living project dashboard

### Setting Up a Dynamic Map

1. Click **"Create New Map"** from your project overview
2. Select **"Dynamic Map"** as the map type
3. Choose your target Jira board from the dropdown
4. Configure your import settings:
   - **Issue Types**: Select which issue types to include (Story, Bug, Task, etc.)
   - **JQL Filter**: Add custom JQL to filter specific issues
   - **Status Categories**: Choose which status categories to include

## Static Maps

Static Maps provide a snapshot of issues at a specific point in time, perfect for planning and analysis.

### How Static Maps Work

- **Point-in-Time Snapshot**: Captures issue data at the moment of creation
- **Manual Updates**: You control when and how the map updates
- **Flexible Structure**: Allows manual reorganization without affecting Jira
- **Planning Focus**: Optimized for strategic planning and analysis

### Best Use Cases for Static Maps

- **Release Planning**: Plan future releases without live data interference
- **Strategic Analysis**: Analyze project scope and dependencies
- **What-If Scenarios**: Test different prioritization approaches
- **Archival Maps**: Preserve project states for historical reference
- **External Stakeholders**: Share maps with stakeholders who don't need live updates

### Setting Up a Static Map

1. Click **"Create New Map"** from your project overview
2. Select **"Static Map"** as the map type
3. Choose your source for initial data:
   - **Import from Board**: Pull current state from a Jira board
   - **Import from JQL**: Use custom JQL query to define scope
   - **Start Empty**: Begin with a blank map structure

## Converting Between Map Types

### Dynamic to Static

Converting a dynamic map to static creates a snapshot that won't sync with Jira:

1. Open your dynamic map
2. Go to **Map Settings** (⚙️ icon)
3. Click **"Convert to Static Map"**
4. Confirm the conversion

⚠️ **Note**: This action cannot be undone. The map will no longer sync with your Jira board.

### Static to Dynamic

Converting a static map to dynamic will begin syncing with a selected board:

1. Open your static map
2. Go to **Map Settings** (⚙️ icon)
3. Click **"Convert to Dynamic Map"**
4. Select the target Jira board
5. Configure sync settings

⚠️ **Note**: Manual changes to issue organization may be overridden by the board structure.

## Map Type Comparison

| Feature | Dynamic Maps | Static Maps |
|---------|--------------|-------------|
| **Real-time Sync** | ✅ Automatic | ❌ Manual only |
| **Jira Integration** | ✅ Full sync | ⚙️ Import only |
| **Manual Reorganization** | ⚠️ Limited | ✅ Full control |
| **Performance** | ⚙️ Network dependent | ✅ Fast loading |
| **Use Case** | Active development | Planning & analysis |
| **Stakeholder Sharing** | ⚠️ Requires Jira access | ✅ Self-contained |

## Best Practices

### Choosing the Right Map Type

**Choose Dynamic Maps when:**
- Your team actively works on the project daily
- You need real-time visibility into progress
- The map serves as a project dashboard
- Team members update Jira regularly

**Choose Static Maps when:**
- Planning future releases or roadmaps
- Analyzing project scope and dependencies
- Sharing with external stakeholders
- Preserving project snapshots for historical reference

### Managing Multiple Maps

Many teams use both map types for different purposes:

- **Dynamic Map**: "Current Sprint" - live view of active work
- **Static Map**: "Q2 Release Planning" - strategic planning without interference
- **Static Map**: "Project Archive" - snapshot of completed work

### Performance Considerations

- **Dynamic Maps**: Load time depends on board size and network connectivity
- **Static Maps**: Faster loading, especially for large projects
- **Hybrid Approach**: Use static maps for planning, dynamic for execution

## Troubleshooting Map Types

### Dynamic Map Issues

**Map not syncing with board:**
- Check board permissions in Jira
- Verify the board still exists
- Review JQL filter settings

**Missing issues:**
- Check issue type filters
- Review status category settings
- Verify JQL syntax

### Static Map Issues

**Unable to convert to dynamic:**
- Ensure target board exists
- Check Jira board permissions
- Verify board configuration

**Import failed:**
- Check JQL syntax
- Verify issue permissions
- Review project access settings

---

## Next Steps

- [Export Features](/docs/pro/features/export) - Learn how to export your maps
- [Board Management](/docs/pro/features/board) - Manage your Jira board connections
- [Settings](/docs/pro/features/settings) - Configure map preferences